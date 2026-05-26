"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ReactNode,
  useRef,
} from "react";

interface GlareHoverProps {
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
}

export default function GlareHover({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.2,
  glareAngle = -30,
  glareSize = 250,
  transitionDuration = 800,
  className = "",
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 18,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 18,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["10deg", "-10deg"]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["-10deg", "10deg"]
  );

  const glareX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-glareSize, glareSize]
  );

  const glareY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-glareSize, glareSize]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const mouseX =
      (e.clientX - rect.left) / rect.width - 0.5;

    const mouseY =
      (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: transitionDuration / 1000,
      }}
      className={`
        relative
        overflow-hidden
        will-change-transform
        ${className}
      `}
    >
      {/* GLARE */}
      <motion.div
        style={{
          x: glareX,
          y: glareY,
          rotate: glareAngle,
          background: `linear-gradient(
            90deg,
            transparent,
            ${glareColor},
            transparent
          )`,
          opacity: glareOpacity,
        }}
        className="
          pointer-events-none
          absolute
          inset-[-120%]
          z-20
          w-[40%]
          blur-2xl
        "
      />

      {/* CONTENT */}
      <div
        style={{
          transform: "translateZ(40px)",
        }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
}