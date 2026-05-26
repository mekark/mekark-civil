"use client";

import Image from "next/image";

const clientLogos = [
  "/Images/Logos/lt.png",
  "/Images/Logos/tvs.png",
  "/Images/Logos/tata.png",
  "/Images/Logos/stetter.png",
  "/Images/Logos/srf.png",
  "/Images/Logos/orbittal.png",
  "/Images/Logos/sarvam.png",
  "/Images/Logos/sanmar.png",
  "/Images/Logos/sanmar1.png",
  "/Images/Logos/reliance.png",
  "/Images/Logos/voltas.png",
  "/Images/Logos/vwu.png",
];

export default function TrustedClientsSection() {
  return (
<section
  className="
    relative
    bg-white

    py-14
    lg:py-20

    overflow-hidden
  "
>      <div className="max-w-[1600px] mx-auto px-5 lg:px-10">
        {/* TOP TEXT */}
        <p
          className="
            text-[#E40015]
            uppercase
            tracking-[2px]
            text-[18px]
            font-bold
            mb-8
          "
        >
          Trusted Across India
        </p>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
            {/* FIRST */}
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={130}
                  height={60}
                  className="
                    h-[65px]
                    w-auto
                    object-contain
                  "
                />
              </div>
            ))}

            {/* DUPLICATE */}
            {clientLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="
                  flex-shrink-0
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={130}
                  height={60}
                  className="
                    h-[45px]
                    w-auto
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}