"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, Users } from "lucide-react";

import CountUp from "@/components/Countup";
import GlareHover from "@/components/GlareHover";

export default function AboutMekark() {
  const stats = [
    {
      value: 18,
      suffix: "+",
      label: "In RCC & Civil Construction",
      sub: "Years",
    },
    {
      value: 200,
      suffix: "+",
      label: "Completed Commercial Projects",
      sub: "Projects",
    },
    {
      value: 400,
      suffix: "+",
      label: "Satisfied Clients ",
      sub: "Clients",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F7F8] py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-20">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.18}
            glareAngle={-30}
            glareSize={280}
            transitionDuration={900}
            playOnce={false}
          >
            <div className="group relative overflow-hidden rounded-[22px] border border-black/5 bg-black shadow-2xl">
              {/* BUILDING IMAGE */}
              <div className="relative h-[420px] w-full overflow-hidden lg:h-[500px]">
                <Image
                  src="/Images/about.png"
                  alt="About Mekark"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* RED TOP BORDER */}
                <div className="absolute left-0 top-0 h-[4px] w-full bg-[#E60F1A]" />

                {/* LOGO */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/Images/logo.png"
                    alt="Mekark Logo"
                    width={260}
                    height={80}
                    className="w-[180px] sm:w-[220px] lg:w-[280px]"
                  />
                </motion.div>
              </div>
            </div>
          </GlareHover>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-[700px]"
        >
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              font-manrope
              text-[40px]
              font-extrabold
              leading-none
              tracking-tight
              text-black
              sm:text-[50px]
            "
          >
            About <span className="text-[#E60F1A]">Mekark</span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 space-y-6"
          >
            <p className="text-[15px] leading-8 text-[#676060] lg:text-[16px]">
              Mekark is a trusted{" "}
              <span className="font-bold text-[#101116]">
                industrial civil construction company
              </span>{" "}
              specializing in factory construction, industrial building
              construction, and civil infrastructure development. Since our
              establishment, we have been the preferred choice among{" "}
              <span className="font-bold text-[#101116]">
                industrial civil contractors
              </span>
              ,{" "}
              <span className="font-bold text-[#101116]">
                factory civil contractors
              </span>
              , and businesses seeking reliable construction solutions across
              Chennai, Tamil Nadu, and India.
            </p>

            <p className="text-[15px] leading-8 text-[#676060] lg:text-[16px]">
              Our expertise in{" "}
              <span className="font-bold text-[#101116]">
                industrial facility construction
              </span>
              , combined with modern project execution methods, enables us to
              deliver{" "}
              <span className="font-bold text-[#101116]">
                turnkey factory construction
              </span>{" "}
              and industrial infrastructure projects that exceed expectations.
              We are not just a construction contractor — we are your trusted
              partner for factory buildings, manufacturing facilities, and
              industrial developments, managing everything from planning to final
              handover with precision and professionalism.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="
              mt-10
              grid
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border border-[#E3E4E7]
              bg-[#F1F2F4]
              sm:grid-cols-3
            "
          >
            {stats.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    backgroundColor: "#ffffff",
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    relative
                    flex
                    min-h-[170px]
                    flex-col
                    justify-between
                    border-b border-[#E3E4E7]
                    p-6
                    sm:border-b-0
                    sm:border-r
                  "
                >
                  {/* NUMBER */}
                  <div>
                    {/* TOP */}
                    <div className="flex items-start gap-[4px]">
                      <h3
                        className="
        font-number
        flex
        items-start
        text-[34px]
        font-extrabold
        leading-none
        tracking-[-2px]
        text-[#E60F1A]
      "
                      >
                        <CountUp
                          to={item.value}
                          duration={2.4}
                          className="tabular-nums"
                        />

                        <span>{item.suffix}</span>
                      </h3>

                      <span
                        className="
        pt-[5px]
        text-[7px]
        font-medium
        uppercase
        tracking-[0.22em]
        text-[#6B7280]
      "
                      >
                        {item.sub}
                      </span>
                    </div>

                    {/* LABEL */}
                    <p
                      className="
      mt-2
      max-w-[95px]
      text-[9.5px]
      font-semibold
      leading-[1.45]
      text-[#101116]
    "
                    >
                      {item.label}
                    </p>

                    {/* RED LINE */}
                    <div className="mt-3 h-[2px] w-4 bg-[#E60F1A]" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
