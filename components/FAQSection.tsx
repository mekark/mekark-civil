"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronRight, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question:
      "What makes Mekark different from other commercial construction companies?",
    answer:
      "Mekark combines 15+ years of RCC construction expertise with professional project management. We specialize in industrial and commercial civil works with proven on-time delivery records, transparent pricing, and complete turnkey solutions.",
  },
  {
    question:
      "Can you handle large industrial and commercial projects?",
    answer:
      "Absolutely. We have successfully completed 200+ commercial projects ranging from small office buildings to large warehouses and industrial facilities.",
  },
  {
    question:
      "What is your pricing structure for RCC construction?",
    answer:
      "We provide transparent, fixed pricing with detailed cost breakdowns. No hidden charges. We offer competitive rates for commercial RCC construction.",
  },
  {
    question:
      "How do you ensure quality in RCC structure construction?",
    answer:
      "We implement rigorous quality control measures including material testing, structural inspections, and independent certifications. Every RCC frame structure meets building codes.",
  },
  {
    question:
      "What is your project timeline for commercial buildings?",
    answer:
      "Timeline depends on project scope. We provide detailed schedules during planning. Our track record shows consistent on-time delivery.",
  },
  {
    question:
      "Do you provide design services or only construction?",
    answer:
      "We offer complete design-and-build services. From architectural planning and structural design to final construction and handover.",
  },
  {
    question:
      "How do you handle regulatory approvals and permits?",
    answer:
      "We manage all regulatory compliance, building permits, and authority approvals. Our experienced team ensures your commercial project meets all legal requirements.",
  },
  {
    question:
      "Do you serve other locations or only Chennai and Tamil Nadu?",
    answer:
      "While based in Chennai, we have completed commercial RCC construction projects across Tamil Nadu and India. We are happy to discuss projects in your location.",
  },
];

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
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F9FAFC] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 xl:grid-cols-[360px_1fr] xl:gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* TAG */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ED202433] bg-[#ED20241A] px-[10px] py-[5px]">
            <span className="h-2 w-2 rounded-full bg-[#E60F1A]" />

            <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#5A5656]">
              FAQ
            </p>
          </div>

          {/* TITLE */}
          <h2
            className="
              max-w-[340px]
              text-[44px]
              font-extrabold
              leading-[0.95]
              tracking-[-1.9px]
              text-[#101116]

              sm:text-[58px]

              xl:text-[64px]
            "
          >
            Frequently
            <br />
            Asked
            <br />
            <span className="text-[#E60F1A]">Questions</span>
          </h2>

          {/* DESC */}
          <p
            className="
              mt-6
              max-w-[320px]
              text-[15px]
              leading-[28px]
              text-[#53555B]

              sm:text-[16px]
            "
          >
            Everything factory owners, builders, and enterprises ask before
            partnering with Mekark.
          </p>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
              relative
              mt-12
              h-[260px]
              w-full

              sm:h-[340px]

              xl:h-[398px]
              xl:w-[398px]
            "
          >
            <Image
              src="/Images/faq.png"
              alt="Construction Building"
              fill
              priority
              className="object-contain object-left-bottom"
            />
          </motion.div>
        </motion.div>

        {/* FAQ RIGHT */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#E3E4E7]
                  bg-white
                  transition-all
                  duration-300
                "
              >
                {/* HEADER */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-start
                    justify-between
                    gap-5
                    px-5
                    py-6
                    text-left

                    sm:px-7
                  "
                >
                  {/* LEFT */}
                  <div className="flex gap-4">
                    <span
                      className="
                        mt-[6px]
                        text-[12px]
                        font-bold
                        tracking-[-0.45px]
                        text-[#E60F1A]
                      "
                    >
                      Q{String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        max-w-[560px]
                        text-[16px]
                        font-bold
                        leading-[28px]
                        tracking-[-0.45px]
                        text-[#101116]

                        sm:text-[18px]
                      "
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* ICON */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 90 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="mt-1 shrink-0"
                  >
                    {isOpen ? (
                      <Minus
                        size={18}
                        className="text-[#101116]"
                      />
                    ) : (
                      <ChevronRight
                        size={18}
                        className="text-[#101116]"
                      />
                    )}
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#E3E4E7] px-5 pb-6 pt-5 sm:px-7">
                        <p
                          className="
                            max-w-[90%]
                            text-[15px]
                            leading-[28px]
                            text-[#53555B]

                            sm:text-[16px]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}