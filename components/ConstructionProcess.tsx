"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "STEP 01",
        title: "Site Assessment",
        description:
            "Detailed site evaluation, soil testing, and feasibility study for your commercial RCC construction project.",
    },
    {
        step: "STEP 02",
        title: "Project Planning",
        description:
            "Comprehensive planning, design finalization, and cost estimation for your civil construction project.",
    },
    {
        step: "STEP 03",
        title: "Regulatory Approvals",
        description:
            "Managing all permits, building approvals, and compliance with local regulations and authorities.",
    },
    {
        step: "STEP 04",
        title: "Foundation & Structure",
        description:
            "Expert RCC construction of foundations and structural framework with continuous quality monitoring.",
    },
    {
        step: "STEP 05",
        title: "MEP & Finishing",
        description:
            "Professional installation of mechanical, electrical, and plumbing systems with premium finishing.",
    },
    {
        step: "STEP 06",
        title: "Handover & Support",
        description:
            "Final quality checks, documentation, and post-completion support for your commercial project.",
    },
];

export default function ConstructionProcess() {
    return (
        <section className="relative bg-[#F4F4F4]">
            {/* DESKTOP */}
            <div
                className="
          relative
          hidden
          min-h-[2600px]

          lg:block
        "
            >
                {/* STICKY IMAGE */}
                <div
                    className="
            sticky
            top-0
            h-screen
            overflow-hidden
          "
                >
                    {/* LIGHT BG */}
                    <div
                        className="
              absolute
              inset-0
              bg-[url('/Images/stbg.png')]
              bg-cover
              bg-center
            "
                    />

                    {/* BUILDING */}
                    <div
                        className="
              absolute
              inset-0

              bg-[url('/Images/st.png')]
              bg-no-repeat

              bg-[length:600px]
              bg-[position:center_top_20px]
              
            "
                    />

                    {/* SOFT VIGNETTE */}
                    <div
                        className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_100%)]
            "
                    />

                    {/* TITLE */}
                    <div
                        className="
  absolute
  top-[95px]
  left-1/2
  -translate-x-1/2
  z-20
  w-full
  max-w-[1600px]
  px-[70px]
  pl-[80px]
"
                    >
                        <div className="relative flex items-start pl-[380px]">

                            {/* OUR */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="
                                  mt-[60px]

  font-manrope
  text-[120px]
  font-bold
  leading-[0.82]
  italic
rotate-[-10deg]

  tracking-[-6px]
  text-white
"
                            >
                                Our
                            </motion.h1>

                            {/* CONSTRUCTION PROCESS */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.8 }}
                                className="
  absolute
  left-[730px]
  top-[-15px]
    italic
  rotate-[-10deg]
"
                            >
                                <h2
                                    className="
  font-manrope
  text-[72px]
  font-bold
  leading-[0.8]
  tracking-[-3px]
  text-[#1E1E1E]
"
                                >
                                    Construction
                                </h2>

                                <h2
                                    className="
  font-manrope
  text-[72px]
  font-bold
  leading-[0.88]
  tracking-[-3px]
  text-[#C4161C]
"
                                >
                                    Process
                                </h2>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* FLOATING STEPS */}
                <div className="absolute inset-0 z-30">
                    {steps.map((item, index) => {
                        const positions = [
                            "top-[420px] left-[90px]",
                            "top-[760px] right-[60px]",
                            "top-[1100px] left-[90px]",
                            "top-[1440px] right-[60px]",
                            "top-[1780px] left-[90px]",
                            "top-[2120px] right-[60px]",
                        ];

                        return (
                            <motion.div
                                key={item.step}
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`
                  absolute
                  ${positions[index]}
                `}
                            >
                                {/* CARD */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.015,
                                    }}
                                    className="
                    group
                    relative
                    w-[700px]
                    overflow-hidden
                  "
                                >
                                    {/* PANEL */}
                                    <div
                                        className={`
    relative
    overflow-hidden

    px-[40px]
    py-[34px]

    ${index % 2 === 0
                                                ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0)_100%)]"
                                                : "bg-[linear-gradient(270deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0)_100%)]"
                                            }
  `}
                                    >


                                        {/* CONTENT */}
                                        <div
                                            className={`
    relative
    z-10

    ${index % 2 !== 0
                                                    ? "ml-auto flex max-w-[560px] flex-col items-end text-right"
                                                    : "max-w-[860px]"
                                                }
  `}
                                        >                                            {/* STEP */}
                                            <p
                                                className="
                          text-[15px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#E60F1A]
                        "
                                            >
                                                {item.step}
                                            </p>

                                            {/* TITLE */}
                                            <h3
                                                className="
                          mt-2
                          text-[44px]
                          font-extrabold
                          leading-[52px]
                          tracking-[-1px]
                          text-white
                        "
                                            >
                                                {item.title}
                                            </h3>

                                            {/* DESC */}
                                            <p
                                                className="
                          mt-5
                          max-w-[520px]
                          text-[18px]
                          leading-[30px]
                          text-[#C7C2C2]
                        "
                                            >
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* HOVER LIGHT */}
                                        <div
                                            className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500

                        group-hover:opacity-100

                        bg-[radial-gradient(circle_at_right,#E60F1A12,transparent_45%)]
                      "
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* MOBILE */}
            <div className="relative lg:hidden">
                {/* HERO */}
                <div
                    className="
            relative
            h-[520px]
            overflow-hidden
          "
                >
                    {/* BG */}
                    <div
                        className="
              absolute
              inset-0

              bg-[url('/Images/stbg.png')]
              bg-cover
              bg-center
            "
                    />

                    {/* BUILDING */}
                    <div
                        className="
              absolute
              inset-0

              bg-[url('/Images/st.png')]
              bg-no-repeat
              bg-[length:120%]
              bg-center
            "
                    />

                    {/* VIGNETTE */}
                    <div
                        className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.18)_100%)]
            "
                    />

                    {/* TITLE */}
                    <div
                        className="
    absolute
    left-[60px]
    top-[140px]
    z-20
  "
                    >
                        {/* OUR */}
                        <h1
                            className="
    font-manrope
    text-[130px]
    font-extrabold
    italic

    leading-[123px]
    tracking-[0px]

    text-white

    origin-left
    inline-block
  "
                        >
                            Our
                        </h1>

                        {/* PROCESS */}
                        <div
                            className="
      absolute
      left-[250px]
      top-[-8px]
    "
                        >
                            <h2
                                className="
        font-manrope
        text-[82px]
        font-extrabold
        leading-[0.9]
        tracking-[-3px]
        text-[#1E1E1E]
      "
                            >
                                Construction
                            </h2>

                            <h2
                                className="
        font-manrope
        text-[82px]
        font-extrabold
        leading-[0.9]
        tracking-[-3px]
        text-[#C4161C]
      "
                            >
                                Process
                            </h2>
                        </div>
                    </div>
                </div>

                {/* MOBILE STEPS */}
                <div className="flex flex-col gap-5 px-5 py-10">
                    {steps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                            }}
                            className="
                relative
                overflow-hidden
              "
                        >
                            {/* PANEL */}
                            <div
                                className="
                  relative
                  overflow-hidden

                  px-6
                  py-6

                  bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0)_100%)]
                "
                            >


                                {/* CONTENT */}
                                <div className="relative z-10">
                                    {/* STEP */}
                                    <p
                                        className="
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#E60F1A]
                    "
                                    >
                                        {item.step}
                                    </p>

                                    {/* TITLE */}
                                    <h3
                                        className="
                      mt-2
                      text-[34px]
                      font-bold
                      leading-[1]
                      tracking-[-1px]
                      text-white
                    "
                                    >
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p
                                        className="
                      mt-4
                      text-[15px]
                      leading-[1.8]
                      text-[#C7C2C2]
                    "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}