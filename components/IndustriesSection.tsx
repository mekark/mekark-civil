"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    ArrowUpRight,

} from "lucide-react";

const industries = [
    {
        title: "Manufacturing & Factories",
        desc: "Industrial RCC construction tailored for heavy equipment and production infrastructure.",
        image: "/Images/1.png",
    },
    {
        title: "Logistics & Warehousing",
        desc: "Large-span warehouse construction with professional industrial RCC execution.",
        image: "/Images/2.jpg",
    },
    {
        title: "Retail & Commerce",
        desc: "Shopping complexes and retail spaces with modern commercial RCC structures.",
        image: "/Images/3.png",
    },
    {
        title: "Healthcare & Hospitals",
        desc: "Medical facility construction meeting all infrastructure and safety standards.",
        image: "/Images/4.png",
    },
    {
        title: "Education Sector",
        desc: "Schools, colleges, and institutes with future-ready RCC infrastructure.",
        image: "/Images/5.png",
    },
    {
        title: "Hospitality & Hotels",
        desc: "Premium hotel and resort construction with elegant RCC engineering.",
        image: "/Images/6.png",
    },
    {
        title: "IT & Corporate Offices",
        desc: "Modern office spaces for tech companies and corporate businesses.",
        image: "/Images/7.png",
    },
    {
        title: "Real Estate Development",
        desc: "Commercial properties and real estate projects with premium finishes.",
        image: "/Images/8.png",
    },
];

export default function IndustriesSection() {
    return (
        <section className="relative overflow-hidden bg-[#F7F7F8] py-20 lg:py-28">
            {/* TOP GLOW */}
            <div
                className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#E60F1A]/5
          blur-3xl
        "
            />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
                {/* HEADER */}
                <div className="max-w-[760px]">
                    {/* BADGE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#ED202433]
              bg-[#ED20241A]
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
                            }}
                            className="h-2 w-2 rounded-full bg-[#E60F1A]"
                        />

                        <span
                            className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#5A5656]
              "
                        >
                            Sectors
                        </span>
                    </motion.div>

                    {/* TITLE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            staggerChildren: 0.08,
                        }}
                        className="mt-6"
                    >
                        <motion.h2
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="
                font-manrope
                text-[40px]
                font-extrabold
                leading-[0.95]
                tracking-[-2px]
                text-[#101116]
                sm:text-[58px]
              "
                        >
                            Industries We{" "}
                            <span className="text-[#E60F1A]">
                                Serve
                            </span>
                        </motion.h2>
                    </motion.div>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                        }}
                        className="
              mt-6
              max-w-[640px]
              text-[18px]
              leading-[1.7]
              text-[#53555B]
            "
                    >
                        Trusted commercial construction
                        contractor across diverse industrial
                        sectors
                    </motion.p>
                </div>

{/* GRID */}
<div
  className="
    mt-16
    grid
    gap-6

    sm:grid-cols-2
    xl:grid-cols-4
  "
>
  {industries.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -14,
      }}
      className="
        group
        relative

        h-[390px]

        overflow-hidden
        rounded-[28px]
      "
    >
      {/* IMAGE */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-black/5
          via-black/20
          to-black/90
        "
      />

      {/* RED HOVER GLOW */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-[#E60F1A]/40
          via-[#E60F1A]/10
          to-transparent
        "
      />

      {/* SHINE SWEEP */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.16)_50%,transparent_80%)]

          translate-x-[-140%]

          transition-transform
          duration-[1400ms]

          group-hover:translate-x-[140%]
        "
      />

      {/* FLOATING ORB */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-40px]
          top-[-40px]

          h-[140px]
          w-[140px]

          rounded-full

          bg-[#E60F1A]/25

          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10

          p-6
        "
      >
        {/* TITLE */}
        <motion.h3
          whileHover={{
            x: 4,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            max-w-[260px]

            font-manrope
            text-[26px]
            font-extrabold
            leading-[1.05]
            tracking-[-0.8px]

            text-white
          "
        >
          {item.title}
        </motion.h3>

        {/* DESC */}
        <motion.p
          initial={{
            opacity: 0.72,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            mt-4
            max-w-[270px]

            text-[14px]
            leading-[1.6]

            text-white/80
          "
        >
          {item.desc}
        </motion.p>

        {/* BOTTOM */}
        <div className="mt-6 flex items-center justify-between">
          {/* LINE */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 60,
            }}
            transition={{
              delay: index * 0.08 + 0.5,
              duration: 0.8,
            }}
            className="
              h-[3px]
              rounded-full

              bg-gradient-to-r
              from-[#E60F1A]
              to-[#ff7b7b]
            "
          />

          {/* BUTTON */}
          <motion.div
            whileHover={{
              scale: 1.12,
              rotate: -8,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              backdrop-blur-md

              shadow-[0_8px_30px_rgba(255,255,255,0.12)]
            "
          >
            <ArrowUpRight className="h-4 w-4 text-white" />
          </motion.div>
        </div>
      </div>

      {/* BORDER */}
      <div
        className="
          absolute
          inset-0

          rounded-[28px]

          border
          border-white/10
        "
      />
    </motion.div>
  ))}
</div>
            </div>
        </section>
    );
}