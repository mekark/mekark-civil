"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Precision Planning & Quantity Management",
  "	Uncompromising Quality Standards",
  "Safety-First Operations & Complete Transparency",
  "Integrated Design & Build Methodology",
  "In-House Architectural Design Expertise",
  "Integrated MEP Engineering & Own Technical Team",
];

export default function WhyChooseMekark() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black px-0">

      <div
        className="
          relative
          flex
          min-h-[720px]
          w-full
          items-center
          overflow-hidden
          sm:min-h-[760px]
          md:min-h-[820px]
          lg:min-h-[760px]
          xl:min-h-[820px]
        "
      >

        {/* ── BACKGROUND IMAGE: desktop only ── */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/Images/manbg.jpeg"
            alt="Construction Background"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="
              object-cover
              object-[center_top]
            "
          />
        </div>

        {/* Mobile black gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 lg:hidden" />

        <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-black/40 to-transparent hidden lg:block" />

        {/* CONTENT GRID */}
        <div
          className="
            relative
            z-20
            h-[649px]
            w-full
          "
        >
          {/* LEFT SIDE: desktop only */}
          <div className="relative hidden h-full overflow-visible lg:block">
            {/* second bg image layer: desktop only */}
            <div className="absolute inset-0">
              <Image
                src="/Images/manbg.jpeg"
                alt="Construction Background"
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-[30%_center]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                absolute
                bottom-[-98px]
                left-[50%]
                z-20
                h-[82%]
                w-[140%]
                -translate-x-1/2
                sm:h-[86%]
                sm:w-[125%]
                md:h-[88%]
                md:w-[110%]
                lg:h-[94%]
                lg:w-[92%]
                xl:h-[199%]
                xl:w-[96%]
              "
            >
              <Image
                src="/Images/man.png"
                alt="Factory Owner"
                fill
                priority
                quality={100}
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              absolute
              right-4
              top-[50%]
              z-30
              w-[90%]
              max-w-[480px]
              -translate-y-1/2

              /* mobile: center the block */
              left-1/2
              -translate-x-1/2

              sm:right-6
              sm:left-auto
              sm:translate-x-0

              md:right-10
              lg:right-14
              xl:right-16
            "
          >
            <div className="max-w-[460px]">
              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="
                  font-manrope
                  text-[38px]
                  font-bold
                  leading-[0.95]
                  tracking-[-2px]
                  text-white

                  lg:text-black

                  sm:text-[44px]
                  md:text-[52px]
                  lg:text-[48px]
                "
              >
                Why Industry{" "}
                <span className="text-[#8B1E1E]">
                  Leaders
                </span>{" "}
                Choose Mekark
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="
                  mt-5
                  max-w-[430px]
                  text-[14px]
                  leading-[1.7]
                  text-white/70
                  lg:text-black/70
                "
              >
                Unlike generic construction companies, Mekark solves real
                problems faced by industrial clients and project owners.
              </motion.p>

              {/* FEATURES */}
              <div className="mt-9 space-y-2 sm:mt-1">
                {features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 8 }}
                    className="
                      group
                      relative
                      flex
                      h-[68px]
                      w-full
                      max-w-[520px]
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/15
                      bg-black/20
                      px-4
                      backdrop-blur-md
                      transition-all
                      duration-500
                      hover:border-[#ff4d4d]/40
                      hover:bg-black/28
                    "
                  >
                    {/* RED SIDE GLOW */}
                    <div
                      className="
                        absolute left-0 top-0
                        h-full w-[6px]
                        bg-gradient-to-b
                        from-[#ff6a6a]
                        via-[#ff2d2d]
                        to-[#b30000]
                      "
                    />

                    {/* HOVER LIGHT */}
                    <div
                      className="
                        absolute inset-0
                        bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]
                        translate-x-[-120%]
                        transition-transform duration-1000
                        group-hover:translate-x-[120%]
                      "
                    />

                    {/* ICON */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -5 }}
                      transition={{ duration: 0.35 }}
                      className="
                        relative z-10
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-gradient-to-br from-[#ff4d4d] to-[#d60000]
                        shadow-[0_8px_25px_rgba(255,0,0,0.28)]
                      "
                    >
                      <Check className="h-5 w-5 text-white" />
                    </motion.div>

                    {/* TEXT */}
                    <div className="relative z-10">
                      <h3
                        className="
                          font-manrope
                          text-[16px]
                          font-extrabold
                          tracking-[-0.2px]
                          text-white
                        "
                      >
                        {item}
                      </h3>

                    </div>

                    {/* RIGHT ARROW */}
                    <div
                      className="
                        ml-auto
                        text-white/40
                        transition-all duration-500
                        group-hover:translate-x-1
                        group-hover:text-white
                      "
                    >
                      →
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-10"
              >
                <button
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    bg-white
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-black
                    transition-all
                    duration-500
                    hover:text-white

                    lg:bg-black
                    lg:text-white
                    lg:hover:bg-white
                    lg:hover:text-black
                  "
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div
                    className="
                      absolute inset-0
                      translate-y-full
                      bg-black
                      transition-transform duration-500
                      group-hover:translate-y-0
                    "
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}