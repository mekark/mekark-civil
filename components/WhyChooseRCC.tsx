"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ShieldCheck,
  Layers3,
  Flame,
  BadgeDollarSign,
  PencilRuler,
  Crosshair,
  ArrowUpRight,
} from "lucide-react";

import { useState } from "react";

import GlareHover from "@/components/GlareHover";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    id: "01",
    title: "Superior Durability",
    icon: ShieldCheck,
    description:
      "RCC structures provide exceptional longevity, maintaining integrity for 50+ years with minimal maintenance. Perfect for commercial buildings that need to stand the test of time and protect your long-term investment.",
  },
  {
    id: "02",
    title: "High Load-Bearing Capacity",
    icon: Layers3,
    description:
      "RCC construction handles heavy industrial equipment, multi-storey loads, and dynamic forces—ideal for factories, warehouses, and commercial complexes requiring structural strength.",
  },
  {
    id: "03",
    title: "Fire & Earthquake Resistance",
    icon: Flame,
    description:
      "RCC provides superior fire safety ratings and seismic resistance. Essential for industrial buildings and commercial infrastructure in Tamil Nadu and India.",
  },
  {
    id: "04",
    title: "Cost-Effective Solution",
    icon: BadgeDollarSign,
    description:
      "RCC construction offers excellent cost-to-performance ratio. Lower operational costs and long-term durability make it ideal for commercial projects.",
  },
  {
    id: "05",
    title: "Design Flexibility",
    icon: PencilRuler,
    description:
      "RCC frame structures allow customized architectural designs—perfect for unique commercial spaces, retail complexes, office buildings, and industrial facilities.",
  },
  {
    id: "06",
    title: "Precision Engineering",
    icon: Crosshair,
    description:
      "Our RCC civil contractors use advanced engineering practices, structural quality control, and modern execution methods for flawless delivery.",
  },
];

export default function WhyChooseRCC() {
  const [active, setActive] = useState(0);

  return (
    <section  id="why-choose-rcc" className="relative bg-[#F7F7F8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
        {/* TOP */}
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E7D4D4]
                bg-[#FFF1F1]
                px-4
                py-2
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[#E60F1A]"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#5A5656]
                "
              >
                The RCC Advantage
              </span>
            </motion.div>

            {/* TITLE */}
            <ScrollReveal
              containerClassName="mt-5"
              textClassName="
                font-manrope
                max-w-[650px]
                text-[#101116]
                font-extrabold
                tracking-[-2px]
              "
              baseOpacity={0.05}
              blurStrength={10}
              rotationEnd="bottom center"
              wordAnimationEnd="bottom center"
            >
              Why Choose RCC for Your Commercial Building?
            </ScrollReveal>
          </div>

          {/* RIGHT TEXT */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              max-w-[390px]
              text-[15px]
              leading-8
              text-[#5A5656]
            "
          >
            Reinforced Cement Concrete (RCC) is the
            foundation of modern commercial
            infrastructure. Here’s why leading
            builders trust RCC construction for
            their projects:
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[500px_1fr]">
          {/* LEFT STICKY IMAGE */}
          <div className="relative">
            <div className="sticky top-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                }}
              >
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.18}
                  glareAngle={-30}
                  glareSize={260}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <div className="group relative overflow-hidden rounded-[20px]">
                    {/* IMAGE */}
                    <div className="relative h-[520px] overflow-hidden lg:h-[640px]">
                      <Image
                        src="/Images/whyus.png"
                        alt="RCC Construction"
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/10" />

                      {/* RED SIDE GLOW */}
                      <div
                        className="
                          absolute
                          right-0
                          top-0
                          h-full
                          w-[35%]
                          bg-gradient-to-l
                          from-[#E60F1A]/40
                          to-transparent
                        "
                      />
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              const isActive =
                active === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.65,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  onMouseEnter={() =>
                    setActive(index)
                  }
                  className={`
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[22px]
                    border
                    p-6
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "border-[#E60F1A] bg-white shadow-[0_20px_50px_rgba(230,15,26,0.08)]"
                        : "border-[#E5E7EB] bg-white hover:border-[#E60F1A]/40"
                    }
                  `}
                >
                  {/* ACTIVE BACKGROUND */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="featureGlow"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-[#E60F1A]/[0.04]
                          to-transparent
                        "
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 flex gap-5">
                    {/* ICON */}
                    <motion.div
                      animate={{
                        scale: isActive
                          ? 1.08
                          : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border

                        ${
                          isActive
                            ? "border-[#E60F1A] bg-[#E60F1A] text-white"
                            : "border-[#E5E7EB] bg-[#F9FAFB] text-[#E60F1A]"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      {/* TOP */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-3">
                          <span
                            className="
                              font-number
                              text-[11px]
                              text-[#6B7280]
                            "
                          >
                            {item.id}
                          </span>

                          <h3
                            className="
                              text-[17px]
                              font-extrabold
                              tracking-[-0.4px]
                              text-[#101116]
                            "
                          >
                            {item.title}
                          </h3>
                        </div>

                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                          >
                            <ArrowUpRight className="h-4 w-4 text-[#E60F1A]" />
                          </motion.div>
                        )}
                      </div>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-3
                          max-w-[470px]
                          text-[13px]
                          leading-[1.9]
                          text-[#53555B]
                        "
                      >
                        {item.description}
                      </p>

                      {/* ACTIVE LINE */}
                      {isActive && (
                        <motion.div
                          layoutId="activeLine"
                          className="
                            mt-5
                            h-[2px]
                            w-14
                            bg-[#E60F1A]
                          "
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}