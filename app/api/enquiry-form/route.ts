import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  "https://mekark-mail.onrender.com/api/enquiry-form";
const DUPLICATE_WINDOW_MS = 60_000;
const recentSubmissionCache = new Map<string, number>();

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
};

function normalizeValue(value: string | undefined) {
  return (value || "").trim().toLowerCase();
}

function buildSubmissionFingerprint(body: EnquiryPayload) {
  return [
    normalizeValue(body.name),
    normalizeValue(body.phone),
    normalizeValue(body.email),
    normalizeValue(body.company),
    normalizeValue(body.message),
  ].join("|");
}

function isLikelyDuplicateSubmission(fingerprint: string) {
  const now = Date.now();

  for (const [key, timestamp] of recentSubmissionCache.entries()) {
    if (now - timestamp > DUPLICATE_WINDOW_MS) {
      recentSubmissionCache.delete(key);
    }
  }

  const previousTimestamp = recentSubmissionCache.get(fingerprint);

  if (previousTimestamp && now - previousTimestamp <= DUPLICATE_WINDOW_MS) {
    return true;
  }

  recentSubmissionCache.set(fingerprint, now);
  return false;
}

function resolveUpstreamOrigin(request: NextRequest) {
  const directOrigin = request.headers.get("origin");

  if (directOrigin) {
    return directOrigin;
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host");

  const forwardedProto =
    request.headers.get("x-forwarded-proto") || "https";

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }
  

  return new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        {
          status: 400,
        },
      );
    }

    const fingerprint = buildSubmissionFingerprint(body);
    if (isLikelyDuplicateSubmission(fingerprint)) {
      return NextResponse.json({
        success: true,
        deduplicated: true,
      });
    }

    const upstreamOrigin =
      resolveUpstreamOrigin(request);

    // FIRE & FORGET
    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: upstreamOrigin,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    console.log("FORM DATA:", body);

    const responseText = await response.text();
    
    console.log("UPSTREAM STATUS:", response.status);
    console.log("UPSTREAM RESPONSE:", responseText);
    
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Upstream failed",
        },
        {
          status: 500,
        },
      );
    }
    
    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}