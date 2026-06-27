"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronRight, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question:
      "What makes Mekark different from other industrial civil construction companies?",
    answer:
      "Mekark is a trusted industrial civil construction company with expertise in industrial building construction, factory development, and infrastructure projects. We focus on engineering precision, transparent execution, and timely project delivery.",
  },
  {
    question:
      "Can you handle large-scale factory and industrial construction projects?",
    answer:
      "Yes. As experienced industrial civil contractors and factory construction contractors, we execute manufacturing facilities, warehouses, industrial buildings, and large-scale infrastructure developments across India.",
  },
  {
    question: "Do you provide turnkey factory construction services?",
    answer:
      "Yes. Our turnkey factory construction solutions cover planning, engineering, civil works, project management, and execution, ensuring seamless delivery from concept to handover.",
  },
  {
    question: "Do you specialize in manufacturing facility construction?",
    answer:
      "Absolutely. As a leading manufacturing facility construction company, we develop production plants, assembly units, processing facilities, and industrial campuses tailored to operational requirements.",
  },
  {
    question: "What types of industrial projects do you undertake?",
    answer:
      "We specialize in industrial facility construction, industrial factory construction, warehouses, utility buildings, commercial-industrial developments, and supporting infrastructure projects.",
  },
  {
    question: "Do you provide industrial infrastructure construction services?",
    answer:
      "Yes. Our industrial infrastructure construction services include site development, internal roads, drainage systems, utility networks, foundations, and factory support infrastructure.",
  },
  {
    question: "Why choose Mekark as your industrial turnkey contractor?",
    answer:
      "As experienced industrial turnkey contractors, we provide single-point accountability, efficient project management, quality execution, and predictable outcomes for industrial construction projects.",
  },
  {
    question:
      "Do you undertake factory building construction projects across India?",
    answer:
      "Yes. We deliver factory building construction projects for manufacturers and industrial businesses across Chennai, Tamil Nadu, and major industrial hubs throughout India.",
  },
  {
    question:
      "Do you provide industrial foundation and civil work services?",
    answer:
      "Yes. Our team includes experienced industrial foundation contractors and industrial civil work contractors, delivering foundations, structural works, and critical civil infrastructure for industrial projects.",
  },
  {
    question:
      "Do you provide RCC construction services for industrial buildings?",
    answer:
      "Yes. As established RCC building contractors, RCC construction contractors, and industrial RCC building contractors, we deliver durable reinforced concrete structures for factories, warehouses, and industrial facilities.",
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
        <div className="flex w-full max-w-[820px] flex-col gap-4 xl:ml-auto">
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
                className={`
                  overflow-hidden
                  rounded-[20px]
                  border
                  bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#E60F1A]/30 shadow-[0_12px_30px_rgba(230,15,26,0.06)]"
                      : "border-[#E3E4E7]"
                  }
                `}
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
                        max-w-[640px]
                        text-[16px]
                        font-bold
                        leading-[27px]
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
                      initial={
                        index === 0 ? false : { height: 0, opacity: 0 }
                      }
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
                            max-w-[640px]
                            text-[15px]
                            leading-[27px]
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