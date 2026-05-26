"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About Us",
        href: "#about",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "Why Choose Us",
        href: "#why-choose-rcc",
    },
];

export default function Navbar() {
    const [mobileMenu, setMobileMenu] =
        useState(false);

    const [active, setActive] =
        useState("Home");

    return (
        <header
            className="
        fixed
        top-0
        left-0
        z-50

        w-full
      "
        >
            <div
                className="
          max-w-[1500px]
          mx-auto

          px-4
          sm:px-6
          lg:px-10

pt-2
sm:pt-3

lg:pt-5        "
            >
                {/* NAVBAR */}
                <motion.nav
                    initial={{
                        opacity: 0,
                        y: -40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
            relative

            w-full

            h-[78px]

            bg-transparent

            px-2
            sm:px-4
            lg:px-2

            flex
            items-center
          "
                >
                    {/* LOGO */}
                    <div className="shrink-0 z-10">
                        <Link href="/">
                            <Image
                                src="/Images/icon copy.png"
                                alt="Logo"
                                width={150}
                                height={40}
                                priority
                                className="
                  w-auto
                  h-[34px]
                  sm:h-[38px]

                  object-contain
                "
                            />
                        </Link>
                    </div>

                    {/* CENTER NAV */}
                    <div
                        className="
              absolute
              left-1/2
              -translate-x-1/2

              hidden
              lg:flex

              items-center
              gap-10
            "
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() =>
                                    setActive(item.label)
                                }
                                className={`
                  relative

                  text-[15px]

                  font-semibold

                  transition-all
                  duration-300

                  ${active === item.label
                                        ? "text-[#E40015]"
                                        : "text-white/80 hover:text-white"
                                    }
                `}
                            >
                                <span
                                    className="
                    relative

                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]

                    after:transition-all
                    after:duration-300
                  "
                                >
                                    {item.label}
                                </span>

                                {/* ACTIVE LINE */}
                                {active === item.label && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="
                      absolute
                      left-0
                      -bottom-2

                      h-[2px]
                      w-full

                      bg-[#E40015]
                    "
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="ml-auto flex items-center gap-4">
                        {/* CTA BUTTON */}
                        <Link
                            href="#quote-form"
                            className="
                hidden
                sm:flex

                items-center
                justify-center

                h-[48px]

                rounded-full

                bg-[#E40015]

                px-7

                text-white

                text-[14px]

                font-semibold

                transition-all
                duration-300

                hover:bg-red-700
                hover:scale-[1.03]

                shadow-[0_0_35px_rgba(228,0,21,0.35)]
              "
                        >
                            Get Free Quote
                        </Link>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() =>
                                setMobileMenu(!mobileMenu)
                            }
                            className="
                lg:hidden

                w-11
                h-11

                rounded-full

                border
                border-white/10

                bg-white/10

                backdrop-blur-md

                flex
                items-center
                justify-center

                text-white
              "
                        >
                            {mobileMenu ? (
                                <X size={20} />
                            ) : (
                                <Menu size={20} />
                            )}
                        </button>
                    </div>
                </motion.nav>

                {/* MOBILE MENU */}
                <motion.div
                    initial={false}
                    animate={{
                        height: mobileMenu
                            ? "auto"
                            : 0,
                        opacity: mobileMenu ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="
            lg:hidden

            overflow-hidden
          "
                >
                    <div
                        className="
              mt-3

              rounded-[24px]

              border
              border-white/10

              bg-black/70

              backdrop-blur-xl

              p-5
            "
                    >
                        <div className="flex flex-col gap-5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => {
                                        setActive(
                                            item.label
                                        );

                                        setMobileMenu(
                                            false
                                        );
                                    }}
                                    className={`
                    text-[15px]

                    font-medium

                    transition-all
                    duration-300

                    ${active ===
                                            item.label
                                            ? "text-[#E40015]"
                                            : "text-white/80 hover:text-white"
                                        }
                  `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* MOBILE CTA */}
                        <Link
                            href="#quote"
                            onClick={() =>
                                setMobileMenu(false)
                            }
                            className="
                mt-6

                flex
                items-center
                justify-center

                h-[50px]

                rounded-full

                bg-[#E40015]

                text-white

                text-[15px]

                font-semibold

                transition-all
                duration-300

                hover:bg-red-700
              "
                        >
                            Get Free Quote
                        </Link>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}