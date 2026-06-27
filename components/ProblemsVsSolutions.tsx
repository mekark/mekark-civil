"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const problems = [
  "High capital risk from inexperienced factory construction contractors",
  "Execution gaps between design intent and on-site delivery",
  "Delayed industrial projects affecting market expansion timelines",
  "Fragmented contractor management increasing project risk",
  "Infrastructure that fails to support long-term operational growth",
  "Budget uncertainty throughout the construction lifecycle",
  "Compliance, safety, and quality control concerns",
];

const solutions = [
  "Proven industrial civil construction expertise with reliable project delivery",
  "Unified planning, engineering, and execution under one accountable team",
  "Expert manufacturing facility and industrial development capabilities",
  "Scalable industrial infrastructure construction for long-term growth",
  "Budget transparency and schedule certainty through advanced project controls",
  "Turnkey execution models that simplify stakeholder management",
  "Facilities delivered to global quality and safety standards",
];
export default function ProblemsVsSolutions() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">

      {/* BG */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/Images/pvs.png')]
          bg-cover
          bg-center
          grayscale
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">

        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#ED202433]
            bg-[#ED20241A]
            px-[10px]
            py-[5px]
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#ED2024]" />

          <span
            className="
              font-manrope
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#53555B]

              sm:text-[11px]
            "
          >
            Problems vs Solutions
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-5
            max-w-[820px]

            font-manrope
            text-[38px]
            font-extrabold
            leading-[0.95]
            tracking-[-2px]
            text-[#101116]

            sm:text-[46px]
            md:text-[54px]
            lg:text-[44px]
          "
        >
          Common Construction
          <br />

          Challenges &{" "}
          <span className="text-[#E60F1A]">
            Solutions
          </span>
        </motion.h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[24px]
            border
            border-[#E3E4E7]
            bg-white
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]

            lg:grid
            lg:grid-cols-2
          "
        >

          {/* VS BADGE */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              hidden
              h-[54px]
              w-[54px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#ED2024]
              text-[13px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              shadow-[0_12px_30px_rgba(230,15,26,0.35)]

              lg:flex
            "
          >
            VS
          </div>

          {/* LEFT SIDE */}
          <div
            className="
              border-b
              border-[#E3E4E7]
              bg-[#FAFAFA]
              px-5
              py-7

              sm:px-8
              sm:py-9

              lg:border-b-0
              lg:border-r
              lg:px-10
              lg:py-10
            "
          >

            {/* TITLE */}
            <div
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#53555B]
              "
            >
              The Challenges
            </div>

            {/* ITEMS */}
            <div className="mt-7 space-y-4">

              {problems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8DADF]
                      bg-white
                    "
                  >
                    <X className="h-3.5 w-3.5 text-[#7B7E87]" />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      font-manrope
                      text-[14px]
                      leading-[1.7]
                      text-[#53555B]
                      line-through

                      sm:text-[15px]
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              relative
              overflow-hidden
              bg-[#101116]
              px-5
              py-7

              sm:px-8
              sm:py-9

              lg:px-12
              lg:py-10
            "
          >



            {/* TITLE */}
            <div
              className="
                relative
                z-10
                text-[11px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#E60F1A]
              "
            >
              How Mekark Solves These
            </div>

            {/* ITEMS */}
            <div className="relative z-10 mt-7 space-y-4">

              {solutions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.06,
                    duration: 0.5,
                  }}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E60F1A]
                    "
                  >
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      font-manrope
                      text-[14px]
                      leading-[1.7]
                      text-white/90

                      sm:text-[15px]
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}