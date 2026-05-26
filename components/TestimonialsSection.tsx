"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";


const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Factory Owner, Tamil Nadu",
        initials: "RK",
        content:
            "We needed a reliable RCC contractor for our warehouse project. Mekark delivered exactly on time, within budget, and with superior quality. Highly recommended for industrial construction!",
    },
    {
        name: "Priya Sharma",
        role: "Real Estate Developer, Chennai",
        initials: "PS",
        content:
            "Professional team, transparent communication, and outstanding civil construction expertise. Mekark handled our commercial office building project flawlessly.",
    },
    {
        name: "Vikram Patel",
        role: "Commercial Builder, India",
        initials: "VP",
        content:
            "As a builder, I needed a turnkey contractor I could trust. Mekark exceeded expectations on our retail complex project. Exceptional project management and quality throughout.",
    },
];

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};


export default function TestimonialsSection() {

    const fadeUp: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },

        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.7,
                delay: i * 0.15,

                ease: [0.22, 1, 0.36, 1] as const,
            },
        }),
    };
    return (
        <section id="testimonials" className="relative w-full overflow-hidden bg-[#F8F8F8] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-28">
            <div className="mx-auto max-w-[1440px]">
                {/* TOP TAG */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ED202433] bg-[#ED20241A] px-[10px] py-[5px]"
                >
                    <span className="h-2 w-2 rounded-full bg-[#E60F1A]" />

                    <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#5A5656]">
                        Client Testimonials
                    </p>
                </motion.div>

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="
            max-w-[820px]
            text-[34px]
            font-extrabold
            leading-[1]
            tracking-[-1.5px]
            text-[#101116]

            sm:text-[42px]
            md:text-[50px]
          "
                >
                    What factory owners, builders, and industrial clients say about{" "}
                    <span className="text-[#E60F1A]">Mekark</span>
                </motion.h2>

                {/* CARDS */}
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{
                                y: -10,
                                scale: 1.01,
                                transition: {
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            className="
    group
    relative
    flex
    min-h-[320px]
    flex-col
    overflow-hidden
    rounded-[24px]
    border
    border-[#E3E4E7]
    bg-white
    p-6
    shadow-[0_4px_30px_rgba(0,0,0,0.03)]
    transition-all
    duration-500

    sm:min-h-[340px]
    sm:p-7

    md:p-8

    hover:border-[#E60F1A22]
    hover:shadow-[0_12px_50px_rgba(230,15,26,0.08)]
  "
                        >
                            {/* TOP RED LINE */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                }}
                                className="
      absolute
      left-0
      top-0
      h-[3px]
      w-full
      origin-left
      bg-[#E60F1A]
    "
                            />

                            {/* QUOTE */}
                            <motion.div
                                animate={{
                                    y: [0, -5, 0],
                                    rotate: [0, -2, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="mb-3"
                            >
                                <Quote
                                    className="fill-[#E60F1A] text-[#E60F1A]"
                                    size={30}
                                />
                            </motion.div>

                            {/* STARS */}
                            <div className="mb-5 flex items-center gap-[3px]">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            delay: i * 0.08,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Star
                                            size={14}
                                            className="fill-[#E60F1A] text-[#E60F1A]"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* CONTENT */}
                            <p
                                className="
      text-[15px]
      leading-[28px]
      text-[#101116]

      sm:text-[16px]
    "
                            >
                                {item.content}
                            </p>

                            {/* FOOTER */}
                            <div className="mt-auto pt-7">
                                <div className="border-t border-[#E3E4E7] pt-5">
                                    <div className="flex items-center gap-4">
                                        {/* AVATAR */}
                                        <motion.div
                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 3,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                            className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#E60F1A]
            text-sm
            font-bold
            text-white
            shadow-[0_8px_20px_rgba(230,15,26,0.25)]
          "
                                        >
                                            {item.initials}
                                        </motion.div>

                                        {/* INFO */}
                                        <div>
                                            <h4
                                                className="
              text-[16px]
              font-bold
              leading-6
              tracking-[-0.4px]
              text-[#101116]
            "
                                            >
                                                {item.name}
                                            </h4>

                                            <p className="text-[12px] leading-4 text-[#53555B]">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HOVER GLOW */}
                            <div
                                className="
      pointer-events-none
      absolute
      inset-0
      rounded-[24px]
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
      bg-[radial-gradient(circle_at_top,#E60F1A14,transparent_60%)]
    "
                            />

                            {/* FLOATING BLUR */}
                            <div
                                className="
      pointer-events-none
      absolute
      -right-10
      -top-10
      h-28
      w-28
      rounded-full
      bg-[#E60F1A10]
      blur-3xl
    "
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}