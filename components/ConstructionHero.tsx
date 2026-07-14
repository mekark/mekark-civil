"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Building2,
  CheckCircle2,
  Users,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

import CountUp from "@/components/Countup";
import { useState } from "react";

const THANK_YOU_URL = "https://civilconstruction.mekark.com/thank-you";
const WHATSAPP_NUMBER = "919790924754";
const FORM_ENDPOINT = "/api/enquiry-form";

const START_TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
];

const BUDGETS = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
];

const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss my  industrial civil construction project.";

const HIGHLIGHTS = [
  "450+ Industrial & Civil Construction Projects Delivered",
  "Experienced Industrial Civil Contractors",
  "End-to-End Project Execution",
  "On-Time Delivery & Quality Assurance",
];

type FormErrors = Partial<
  Record<"name" | "phone" | "industry" | "sqft" | "startTimeline" | "budget", string>
>;

const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export default function ConstructionHero() {
  const stats = [
    {
      icon: BriefcaseBusiness,
      value: 18,
      suffix: "+",
      label: "YEARS OF EXPERIENCE",
    },
    {
      icon: Building2,
      value: 200,
      suffix: "+",
      label: "COMPLETED COMMERCIAL PROJECTS",
    },
    {
      icon: CheckCircle2,
      value: 97.8,
      suffix: "%",
      label: "ON-TIME DELIVERY GUARANTEE",
    },
    {
      icon: Users,
      value: 400,
      suffix: "+",
      label: "SATISFIED CLIENTS ",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    sqft: "",
    startTimeline: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const newErrors: FormErrors = {};

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

    if (!formData.startTimeline) {
      newErrors.startTimeline = "Please select a project start timeline";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a project budget";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
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
          startTimeline: formData.startTimeline,
          budget: formData.budget,
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

      window.location.href = THANK_YOU_URL;
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/Images/herobg.png"
          alt="Construction Building"
          fill
          priority
          className="object-cover object-center"
        />

        {/* DARK */}
        <div className="absolute inset-0 bg-black/15" />

        {/* LEFT DARK */}
        <div className="absolute inset-y-0 left-0 w-[-5%] bg-gradient-to-r from-black via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[920px]
          max-w-[1440px]
          grid-cols-1
          gap-14

          px-5
          pt-32
          pb-16

          sm:px-8
          sm:pt-36

          lg:grid-cols-[1fr_640px]
          lg:items-center
          lg:gap-16
          lg:px-16
          lg:pt-40
          lg:pb-16
        "
      >
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/5
              px-4
              py-2
              backdrop-blur-sm
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-3 w-3 rounded-full bg-red-600"
            />

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/90">
              INDUSTRIAL CIVIL CONSTRUCTION EXPERTS
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-4xl
              font-manrope
              text-[42px]
              font-bold
              leading-[1.05]
              tracking-[-2.3px]
              text-white

              sm:text-[56px]

              lg:text-[62px]
            "
          >
            Leading Industrial <span className="text-[#E40015]">Civil Construction</span>
            <br />
            Company
            <br />
            in Chennai
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              mt-6
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#BDBDBD]

              sm:text-base

              lg:text-lg
            "
          >
            Mekark delivers comprehensive commercial RCC construction,
            industrial civil works, and turnkey building solutions for
            factories, retail complexes, and commercial infrastructure across
            Tamil Nadu and India.
          </motion.p>

          {/* HIGHLIGHTS */}
          <motion.ul
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-6 space-y-3"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 + index * 0.06, duration: 0.5 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E40015]" />
                <span className="text-sm font-medium text-white/90 sm:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* REVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="
              mt-10

              flex
              w-full
              max-w-[420px]
              items-center
              gap-4

              rounded-2xl
              border
              border-white/10

              bg-white/10
              px-5
              py-4

              backdrop-blur-xl
            "
          >
            {/* LOGOS */}
            <div className="flex -space-x-2">
              <Image
                src="/Images/Logos/kom.png"
                alt="Client"
                width={42}
                height={42}
                className="rounded-full border-2 border-white object-cover"
              />

              <Image
                src="/Images/Logos/sarvam.png"
                alt="Client"
                width={42}
                height={42}
                className="rounded-full border-2 border-white object-cover"
              />

              <Image
                src="/Images/Logos/vwu.png"
                alt="Client"
                width={42}
                height={42}
                className="rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                  />
                ))}

                <span className="ml-2 text-[18px] font-bold text-white">
                  4.7/5
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-white/80">
                Trusted Client Rating
              </p>

              <p className="mt-0.5 text-xs text-white/60">
                500+ Successful Industrial Projects
              </p>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="
              mt-10
              flex
              flex-row
              flex-wrap
              gap-3
            "
          >
            <motion.a
              href={`tel:+${WHATSAPP_NUMBER}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
    flex
    items-center
    justify-center
    gap-2

    rounded-md
    border
    border-white/10

    bg-white

    px-6
    py-4

    text-sm
    font-semibold
    text-black

    shadow-lg
    shadow-white/10
  "
            >
              <Phone className="h-4 w-4" />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
    group

    flex
    items-center
    justify-center
    gap-2

    rounded-md

    border
    border-green-500/20

    bg-[#111]

    px-6
    py-4

    text-sm
    font-semibold

    text-[#25D366]

    transition-all
    duration-300

    hover:border-green-500/40
    hover:bg-[#161616]
    hover:shadow-[0_10px_30px_rgba(37,211,102,0.18)]
  "
            >
              <MessageCircle
                className="
      h-4
      w-4

      transition-transform
      duration-300

      group-hover:scale-110
    "
              />
              WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[640px] lg:ml-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="
              w-full
              rounded-[36px]
              bg-white

              p-6

              shadow-[0_25px_80px_rgba(0,0,0,0.35)]

              sm:p-8

              lg:p-10
            "
          >
            {/* TITLE */}
            <h3
              className="
                text-center
                font-manrope
                text-[32px]
                font-bold
                leading-[40px]
                tracking-[-1px]
                text-black

                lg:text-[30px]
                lg:leading-[54px]
              "
            >
              Request Your Project Blueprint
            </h3>

            <p className="mt-3 text-center text-[15px] text-gray-500 lg:text-[13px]">
              Get a custom layout, cost range & 120-day timeline
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name*"
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D90916]
                    focus:bg-white
                  "
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* COMPANY */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Company Name"
                className="
                  h-[54px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#E5E5E5]
                  bg-[#ECECEC]
                  px-4
                  text-[15px]
                  font-medium
                  text-black
                  placeholder:text-black/55
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#D90916]
                  focus:bg-white
                "
              />

              {/* GRID */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* PHONE */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number*"
                    className="
                      h-[54px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      placeholder:text-black/55
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D90916]
                      focus:bg-white
                    "
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D90916]
                    focus:bg-white
                  "
                />

                {/* INDUSTRY */}
                <div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="
                      h-[54px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D90916]
                      focus:bg-white
                    "
                  >
                    <option value="">Select Industry Type*</option>

                    {[
                      "PEB + Civil Construction",
                      "Industrial Building Construction",
                      "Warehouse Construction",
                      "Factory Construction",
                      "RCC Structure Construction",
                    ].map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>

                  {errors.industry && (
                    <p className="mt-2 text-sm text-red-500">
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
                    className="
                      h-[54px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D90916]
                      focus:bg-white
                    "
                  >
                    <option value="">Select Sq.ft Requirement*</option>

                    {[
                      "10,000 - 20,000 Sq.ft",
                      "20,000 - 30,000 Sq.ft",
                      "30,000 - 50,000 Sq.ft",
                      "50,000+ Sq.ft",
                    ].map((sqft) => (
                      <option key={sqft} value={sqft}>
                        {sqft}
                      </option>
                    ))}
                  </select>

                  {errors.sqft && (
                    <p className="mt-2 text-sm text-red-500">{errors.sqft}</p>
                  )}
                </div>

                {/* START TIMELINE */}
                <div>
                  <select
                    name="startTimeline"
                    value={formData.startTimeline}
                    onChange={handleChange}
                    className="
                      h-[54px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D90916]
                      focus:bg-white
                    "
                  >
                    <option value="">Project Start Timeline *</option>
                    {START_TIMELINES.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>

                  {errors.startTimeline && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.startTimeline}
                    </p>
                  )}
                </div>

                {/* BUDGET */}
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="
                      h-[54px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D90916]
                      focus:bg-white
                    "
                  >
                    <option value="">Project Budget *</option>
                    {BUDGETS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  {errors.budget && (
                    <p className="mt-2 text-sm text-red-500">{errors.budget}</p>
                  )}
                </div>

                {/* LOCATION */}
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter Project Location"
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D90916]
                    focus:bg-white
                  "
                />

                {/* DETAILS */}
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Requirement Details"
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D90916]
                    focus:bg-white
                  "
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-3
                  h-[58px]
                  w-full
                  rounded-[12px]
                  bg-[#D90916]

                  text-[16px]
                  font-bold
                  text-white

                  shadow-[0_10px_30px_rgba(217,9,22,0.35)]

                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
              </button>
            </form>

            {/* FOOTER */}
            <p className="mt-5 text-center text-sm text-gray-400">
              100% Transparent Consultation with single point project support
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* STATS */}
      <div className="relative z-10 border-t border-white/10 bg-black/95 backdrop-blur-md">
        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            grid-cols-2

            divide-x
            divide-y
            divide-white/10

            sm:grid-cols-2

            lg:grid-cols-4
            lg:divide-y-0
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3

                  px-4
                  py-7

                  text-center
                "
              >
                {/* TOP */}
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 text-red-600" />

                  <h3 className="flex items-center text-3xl font-bold tracking-tight">
                    <CountUp
                      to={item.value}
                      duration={2.5}
                      className="tabular-nums"
                    />

                    <span className="text-red-600">{item.suffix}</span>
                  </h3>
                </div>

                {/* LABEL */}
                <p
                  className="
                    max-w-[180px]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/45
                  "
                >
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
