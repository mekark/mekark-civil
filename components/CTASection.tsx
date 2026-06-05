"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const THANK_YOU_URL = "https://civilconstruction.mekark.com/thank-you";
const WHATSAPP_NUMBER = "919790924754";
const FORM_ENDPOINT = "/api/enquiry-form";

const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss my  industrial civil construction project.";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    sqft: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.industry) {
      newErrors.industry = "Select industry type";
    }

    if (!formData.sqft) {
      newErrors.sqft = "Select sq.ft range";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const sourceDomain =
        typeof window !== "undefined" ? window.location.hostname : "";

      const sourceName = "Civil Construction";

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          location: formData.location,
          industry: formData.industry,
          sqf: formData.sqft,
          message: formData.message,
          sourceName,
          sourceDomain,
        }),
      });

      const payload = await response.json().catch(() => null);

      console.log("Response:", payload);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      // window.location.href = THANK_YOU_URL;
      alert("Form Submitted Successfully");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-28">
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-[1400px]
          overflow-hidden
          rounded-[36px]
        "
      >
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/Images/cta.jpg"
            alt="Commercial Construction"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(90deg,rgba(5,8,18,0.96)_0%,rgba(7,9,18,0.88)_28%,rgba(12,12,12,0.55)_55%,rgba(230,15,26,0.28)_100%)]
          "
        />

        {/* RED GLOW */}
        <div
          className="
            absolute
            right-[-120px]
            top-1/2

            h-[420px]
            w-[420px]

            -translate-y-1/2

            rounded-full

            bg-[#E60F1A55]

            blur-[140px]
          "
        />

        {/* GRID */}
        <div
          className="
            relative
            z-10

            grid
            items-center

            gap-14

            px-6
            py-10

            sm:px-10
            sm:py-14

            lg:grid-cols-[1fr_520px]
            lg:gap-16
            lg:px-14
            lg:py-16

            xl:min-h-[760px]
            xl:grid-cols-[1fr_540px]
            xl:px-16
          "
        >
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[640px]"
          >
            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#ffffff15]

                bg-white/10

                px-4
                py-2

                backdrop-blur-md
              "
            >
              <div className="h-2 w-2 rounded-full bg-[#E60F1A]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]

                  text-white/80
                "
              >
                Let’s Build
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7

                font-manrope
                text-[42px]
                font-bold
                leading-[0.95]
                tracking-[-2px]

                text-white

                sm:text-[56px]

                lg:text-[56px]
              "
            >
              Ready to Start
              <br />
              Your Commercial
              <br />
              Construction Project?
            </h2>

            {/* DESC */}
            <p
              className="
                mt-7
                max-w-[560px]

                text-[16px]
                leading-[1.9]

                text-white/75

                sm:text-[17px]
              "
            >
              Join 500+ satisfied clients who chose Mekark for industrial,
              warehouse & RCC construction solutions across India.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-10

                flex
                flex-wrap
                gap-3
              "
            >
              {/* CALL */}
              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="tel:+91XXXXXXXXXX"
                className="
                  inline-flex
                  h-[52px]

                  items-center
                  gap-2

                  rounded-[14px]

                  bg-[#E60F1A]

                  px-6

                  text-sm
                  font-semibold

                  text-white

                  shadow-[0_12px_40px_rgba(230,15,26,0.35)]
                "
              >
                <Phone size={16} />
                Call Now
                <ArrowUpRight size={16} />
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
    group

    inline-flex
    h-[52px]

    items-center
    gap-2

    rounded-[14px]

    border
    border-green-500/20

    bg-[#111]

    px-6

    text-sm
    font-semibold

    text-[#25D366]

    backdrop-blur-md

    transition-all
    duration-300

    hover:border-green-500/40
    hover:bg-[#161616]
    hover:shadow-[0_12px_30px_rgba(37,211,102,0.18)]
  "
              >
                <MessageCircle
                  size={16}
                  className="
      transition-transform
      duration-300

      group-hover:scale-110
    "
                />
                WhatsApp
              </motion.a>

              {/* EMAIL */}
              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="mailto:admin@mekark.com"
                className="
                  inline-flex
                  h-[52px]

                  items-center
                  gap-2

                  rounded-[14px]

                  border
                  border-white/10

                  bg-white/10

                  px-6

                  text-sm
                  font-medium

                  text-white

                  backdrop-blur-md
                "
              >
                <Mail size={16} />
                Email Consultation
              </motion.a>
              {/* LOGOS */}
              <div className="relative z-10 mt-6">
                <p
                  className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-[#8A8A8A]
                "
                >
                  Trusted By Industry Leaders
                </p>

                <div
                  className="
                  mt-4

                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
                >
                  {[
                    "/Images/Logos/kom.png",
                    "/Images/Logos/sarvam.png",
                    "/Images/Logos/vwu.png",
                    "/Images/Logos/tvs.png",
                  ].map((logo, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                      className="
                      flex
                      h-[52px]
                      w-[52px]

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-[#ECECEC]

                      bg-white

                      shadow-sm
                    "
                    >
                      <Image
                        src={logo}
                        alt="client"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              relative

              w-full
              max-w-[540px]

              overflow-hidden
              rounded-[32px]

              border
              border-white/10

              bg-white/95

              p-6

              shadow-[0_30px_100px_rgba(0,0,0,0.30)]

              backdrop-blur-xl

              sm:p-7

              lg:ml-auto
              lg:p-8
            "
          >
            {/* RED GLOW */}
            <div
              className="
                absolute
                right-[-80px]
                top-[-80px]

                h-[220px]
                w-[220px]

                rounded-full

                bg-[#E60F1A]/15

                blur-3xl
              "
            />

            {/* TAG */}
            <div
              className="
                relative
                z-10

                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#E60F1A]/10

                bg-[#E60F1A]/5

                px-4
                py-2
              "
            >
              <div className="h-2 w-2 rounded-full bg-[#E60F1A]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-[#E60F1A]
                "
              >
                Free Consultation
              </span>
            </div>

            {/* TITLE */}
            <h3
              className="
                relative
                z-10

                mt-5

                font-manrope
                text-[34px]
                font-extrabold
                leading-[1.05]
                tracking-[-1.5px]

                text-[#101116]
              "
            >
              Get Your
              <span className="text-[#E60F1A]"> Free Project</span>
              <br />
              Consultation
            </h3>

            {/* DESC */}
            <p
              className="
                relative
                z-10

                mt-4

                text-[15px]
                leading-[1.7]

                text-[#5A5A5A]
              "
            >
              Talk with Mekark experts for industrial, warehouse & RCC
              construction solutions.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 mt-6 space-y-3"
            >
              {/* NAME + COMPANY */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name*"
                    className={`
        h-[54px]
        w-full

        rounded-[14px]

        border

        bg-[#F5F5F5]

        px-4

        text-[15px]
        font-medium
        text-black

        placeholder:text-black/45

        outline-none

        transition-all
        duration-300

        focus:bg-white

        ${
          errors.name
            ? "border-red-500"
            : "border-[#ECECEC] focus:border-[#E60F1A]"
        }
      `}
                  />

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* COMPANY */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="
      h-[54px]
      w-full

      rounded-[14px]

      border
      border-[#ECECEC]

      bg-[#F5F5F5]

      px-4

      text-[15px]
      font-medium
      text-black

      placeholder:text-black/45

      outline-none

      transition-all
      duration-300

      focus:border-[#E60F1A]
      focus:bg-white
    "
                />
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* PHONE */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    className={`
                      h-[54px]
                      w-full

                      rounded-[14px]

                      border

                      bg-[#F5F5F5]

                      px-4

                      text-[15px]
                      font-medium
                      text-black

                      placeholder:text-black/45

                      outline-none

                      transition-all
                      duration-300

                      focus:bg-white

                      ${
                        errors.phone
                          ? "border-red-500"
                          : "border-[#ECECEC] focus:border-[#E60F1A]"
                      }
                    `}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                    h-[54px]
                    w-full

                    rounded-[14px]

                    border
                    border-[#ECECEC]

                    bg-[#F5F5F5]

                    px-4

                    text-[15px]
                    font-medium
                    text-black

                    placeholder:text-black/45

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#E60F1A]
                    focus:bg-white
                  "
                />

                {/* INDUSTRY */}
                <div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`
                      h-[54px]
                      w-full

                      rounded-[14px]

                      border

                      bg-[#F5F5F5]

                      px-4

                      text-[15px]
                      font-medium
                      text-black

                      outline-none

                      transition-all
                      duration-300

                      focus:bg-white

                      ${
                        errors.industry
                          ? "border-red-500"
                          : "border-[#ECECEC] focus:border-[#E60F1A]"
                      }
                    `}
                  >
                    <option value="">Select Industry Type*</option>

                    <option value="Warehouse Construction">
                      Warehouse Construction
                    </option>

                    <option value="Factory Construction">
                      Factory Construction
                    </option>

                    <option value="Commercial RCC">Commercial RCC</option>

                    <option value="Industrial Building">
                      Industrial Building
                    </option>
                  </select>

                  {errors.industry && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* SQFT */}
                <div>
                  <select
                    name="sqft"
                    value={formData.sqft}
                    onChange={handleChange}
                    className={`
                      h-[54px]
                      w-full

                      rounded-[14px]

                      border

                      bg-[#F5F5F5]

                      px-4

                      text-[15px]
                      font-medium
                      text-black

                      outline-none

                      transition-all
                      duration-300

                      focus:bg-white

                      ${
                        errors.sqft
                          ? "border-red-500"
                          : "border-[#ECECEC] focus:border-[#E60F1A]"
                      }
                    `}
                  >
                    <option value="">Select Sq.ft Requirement*</option>

                    <option value="10k - 20k Sq.ft">10k - 20k Sq.ft</option>

                    <option value="20k - 50k Sq.ft">20k - 50k Sq.ft</option>

                    <option value="50k+ Sq.ft">50k+ Sq.ft</option>
                  </select>

                  {errors.sqft && (
                    <p className="mt-1 text-xs text-red-500">{errors.sqft}</p>
                  )}
                </div>
              </div>

              {/* LOCATION + MESSAGE */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* LOCATION */}
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project Location"
                  className="
      h-[54px]
      w-full

      rounded-[14px]

      border
      border-[#ECECEC]

      bg-[#F5F5F5]

      px-4

      text-[15px]
      font-medium
      text-black

      placeholder:text-black/45

      outline-none

      transition-all
      duration-300

      focus:border-[#E60F1A]
      focus:bg-white
    "
                />

                {/* MESSAGE */}
                <textarea
                  rows={1}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="
      h-[54px]
      w-full

      resize-none

      rounded-[14px]

      border
      border-[#ECECEC]

      bg-[#F5F5F5]

      px-4
      py-[15px]

      text-[15px]
      font-medium
      text-black

      placeholder:text-black/45

      outline-none

      transition-all
      duration-300

      focus:border-[#E60F1A]
      focus:bg-white
    "
                />
              </div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  mt-2
                  h-[58px]
                  w-full

                  rounded-[16px]

                  bg-gradient-to-r
                  from-[#E60F1A]
                  to-[#ff3b3b]

                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.08em]

                  text-white

                  shadow-[0_16px_40px_rgba(230,15,26,0.35)]
                "
              >
                Get Free Consultation →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
