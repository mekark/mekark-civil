"use client";

import { useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

import {
    ArrowUpRight,
    Building2,
    Warehouse,
    ShoppingBag,
    Factory,
    Hospital,
    GraduationCap,
    Hotel,
    Building,
    PencilRuler,
} from "lucide-react";

const services = [
    {
        id: "01",
        title: "Office Building Construction",
        category: "Corporate / Commercial",
        description:
            "Professional commercial office spaces designed for modern businesses. Expert RCC structure and premium finishing for professional work environments.",
        icon: Building2,
    },
    {
        id: "02",
        title: "Warehouse RCC Construction",
        category: "Logistics / Industrial",
        description:
            "Large-scale RCC warehouse infrastructure optimized for logistics, heavy equipment, and industrial operations.",
        icon: Warehouse,
    },
    {
        id: "03",
        title: "Retail & Shopping Complex",
        category: "Commercial / Retail",
        description:
            "Modern retail complexes and shopping environments engineered for high footfall and long-term structural durability.",
        icon: ShoppingBag,
    },
    {
        id: "04",
        title: "Industrial Civil Works",
        category: "Heavy Industry",
        description:
            "Comprehensive industrial RCC and civil infrastructure solutions for factories, plants, and production facilities.",
        icon: Factory,
    },
    {
        id: "05",
        title: "Hospital Building Construction",
        category: "Healthcare",
        description:
            "Hospital and healthcare infrastructure with advanced RCC planning and high-compliance execution standards.",
        icon: Hospital,
    },
    {
        id: "06",
        title: "Educational Institutions",
        category: "Schools / Campuses",
        description:
            "Schools, universities, and institutional buildings developed with modern RCC engineering principles.",
        icon: GraduationCap,
    },
    {
        id: "07",
        title: "Hotel & Hospitality",
        category: "Hospitality",
        description:
            "Premium RCC hospitality projects including hotels, resorts, and luxury accommodation spaces.",
        icon: Hotel,
    },
    {
        id: "08",
        title: "Multi-Storey Building Construction",
        category: "High-Rise",
        description:
            "High-rise RCC commercial and mixed-use buildings engineered for long-term performance and safety.",
        icon: Building,
    },
    {
        id: "09",
        title: "Design & Build Services",
        category: "End-to-End",
        description:
            "Complete design-to-execution RCC and civil contracting solutions for commercial infrastructure.",
        icon: PencilRuler,
    },
];

export default function ServicesSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="relative overflow-hidden bg-black py-20 lg:py-28">
            {/* BG GLOW */}
            <div
                className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#ED2024]/10
          blur-3xl
        "
            />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
                {/* TOP */}
                <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
                    {/* LEFT */}
                    <div>
                        {/* BADGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
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
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                backdrop-blur-sm
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
                                className="h-2 w-2 rounded-full bg-[#ED2024]"
                            />

                            <span
                                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-white/60
                "
                            >
                                Our Services
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                staggerChildren: 0.08,
                            }}
                            className="mt-6 max-w-[980px]"
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
      text-[42px]
      font-extrabold
      leading-[0.95]
      tracking-[-2px]
      text-white
      sm:text-[58px]
    "
                            >
                                Comprehensive commercial
                            </motion.h2>

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
                                    delay: 0.1,
                                    ease: "easeOut",
                                }}
                                className="
      mt-1
      font-manrope
      text-[42px]
      font-extrabold
      leading-[0.95]
      tracking-[-2px]
      sm:text-[58px]
    "
                            >
                                <span className="text-[#ED2024]">
                                    Construction
                                </span>{" "}
                                <span className="text-white">
                                    Services.
                                </span>
                            </motion.h2>
                        </motion.div>

                    </div>

                    {/* RIGHT TEXT */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                        }}
                        className="
              max-w-[384px]
              pt-8
              text-[17px]
              font-light
              leading-[1.8]
              text-white/60
            "
                    >
                        From concept to completion—Mekark provides
                        end-to-end civil and RCC construction
                        solutions for all commercial property
                        types.
                    </motion.p>
                </div>

                {/* SERVICES */}
                <div className="mt-20">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        const isActive =
                            active === index;

                        return (
                            <motion.div
                                key={service.id}
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
                                    delay: index * 0.05,
                                    duration: 0.6,
                                }}
                                onMouseEnter={() =>
                                    setActive(index)
                                }
                                whileHover={{
                                    x: 6,
                                }}
                                className={`
                  group
                  relative
                  overflow-hidden
                  border-t
                  border-white/10
                  transition-all
                  duration-500

                  ${isActive
                                        ? "bg-white/[0.03]"
                                        : ""
                                    }
                `}
                            >
                                {/* ACTIVE LINE */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeServiceLine"
                                            className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[3px]
                        bg-[#ED2024]
                      "
                                        />
                                    )}
                                </AnimatePresence>

                                {/* BG HOVER */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            layoutId="serviceGlow"
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
                        from-[#ED2024]/[0.05]
                        to-transparent
                      "
                                        />
                                    )}
                                </AnimatePresence>

                                <div
                                    className="
                    relative
                    z-10
                    grid
                    gap-8
                    px-5
                    py-10
                    lg:grid-cols-[60px_1fr_260px_80px]
                    lg:items-center
                  "
                                >
                                    {/* NUMBER */}
                                    <div
                                        className="
                      font-number
                      text-[12px]
                      tracking-[0.2em]
                      text-white/35
                    "
                                    >
                                        {service.id}
                                    </div>

                                    {/* TITLE */}
                                    <div>
                                        <h3
                                            className="
                        max-w-[430px]
                        text-[28px]
                        font-semibold
                        leading-[1.2]
                        tracking-[-1px]
                        text-white
                        transition-all
                        duration-300
                        sm:text-[34px]
                      "
                                        >
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* CATEGORY / DESC */}
                                    <div>
                                        <p
                                            className="
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                                        >
                                            {service.category}
                                        </p>

                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.p
                                                    key={service.id}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 12,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -12,
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                    }}
                                                    className="
                            mt-4
                            max-w-[320px]
                            text-[14px]
                            font-light
                            leading-[1.8]
                            text-white/60
                          "
                                                >
                                                    {service.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* BUTTON */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className="
                      flex
                      items-center
                      justify-start
                      lg:justify-end
                    "
                                    >
                                        <div
                                            className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${isActive
                                                    ? "border-[#ED2024] bg-[#ED2024] text-white"
                                                    : "border-white/15 text-white"
                                                }
                      `}
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* BOTTOM BORDER */}
                                {index === services.length - 1 && (
                                    <div className="border-b border-white/10" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}