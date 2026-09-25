"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import { contactServices } from "@/lib/contact/contactSchema";

export default function ContactForm() {
  const {
    form: { register, handleSubmit, formState: { errors } },
    onSubmit,
    isSubmitting,
    submitSuccess,
    submitError,
  } = useContactForm();



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[28px] overflow-hidden"
      style={{
        border: "1px solid rgba(0,9,175,0.08)",
        boxShadow: "0 8px 48px -12px rgba(0,9,175,0.1), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Form card header ── */}
      <div
        className="relative px-8 py-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #101928 0%, #1a2538 100%)" }}
      >
        {/* background.png texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.70,
            mixBlendMode: "screen",
          }}
        />
        <p className="relative text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
          Book a Session
        </p>
        <h2 className="relative text-lg sm:text-xl font-extrabold text-white leading-snug">
          Tell us about your learning goals
        </h2>
        <p className="relative mt-1 text-sm text-gray-400">
          We&apos;ll match you with the right tutor and reach out within a few hours.
        </p>
      </div>

      {/* ── Form body ── */}
      <div className="px-6 py-7 sm:px-8 sm:py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Full Name <span className="text-[#0009af]">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. John Akinlagbe"
                {...register("name")}
                className={`w-full px-4 py-3 rounded-xl text-sm bg-[#FAFBFF] border transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                  errors.name
                    ? "border-red-400 focus:ring-red-100 focus:border-red-400"
                    : "border-gray-200 focus:border-[#0009af] focus:ring-[#0009af]/10"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block shrink-0" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Email Address <span className="text-[#0009af]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. john@example.com"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-xl text-sm bg-[#FAFBFF] border transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                  errors.email
                    ? "border-red-400 focus:ring-red-100 focus:border-red-400"
                    : "border-gray-200 focus:border-[#0009af] focus:ring-[#0009af]/10"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block shrink-0" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone + Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                WhatsApp Number <span className="text-[#0009af]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +234 800 000 0000"
                {...register("phone")}
                className={`w-full px-4 py-3 rounded-xl text-sm bg-[#FAFBFF] border transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-100 focus:border-red-400"
                    : "border-gray-200 focus:border-[#0009af] focus:ring-[#0009af]/10"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block shrink-0" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="service" className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Service Required <span className="text-[#0009af]">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  {...register("service")}
                  defaultValue=""
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-[#FAFBFF] border appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                    errors.service
                      ? "border-red-400 focus:ring-red-100 focus:border-red-400"
                      : "border-gray-200 focus:border-[#0009af] focus:ring-[#0009af]/10"
                  }`}
                >
                  <option value="" disabled>Select a subject / service</option>
                  {contactServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.service && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block shrink-0" />
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Message — full width */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-[11px] font-black uppercase tracking-wider text-gray-500">
              Message{" "}
              <span className="normal-case font-semibold tracking-normal text-gray-400">(optional)</span>
            </label>
            <textarea
              id="message"
              placeholder="Any extra context — e.g. curriculum, exam date, current level..."
              rows={4}
              {...register("message")}
              className="w-full px-4 py-3 rounded-xl text-sm bg-[#FAFBFF] border border-gray-200 transition-all duration-200 focus:outline-none focus:border-[#0009af] focus:ring-2 focus:ring-[#0009af]/10 focus:bg-white resize-none"
            />
          </div>

          {/* Status banners */}
          {submitError && (
            <div className="flex items-start gap-3 p-4 bg-red-50 text-red-700 text-sm rounded-2xl border border-red-100">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">!</span>
              {submitError}
            </div>
          )}
          {submitSuccess && (
            <div className="flex items-start gap-3 p-4 bg-green-50 text-green-800 text-sm rounded-2xl border border-green-100">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✓</span>
              Message sent! Opening WhatsApp to continue the conversation...
            </div>
          )}

          {/* Submit */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              id="contact-form-submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(241,170,0,0.4)] active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #f1aa00 0%, #ffc42e 100%)",
                color: "#101928",
                boxShadow: "0 4px 16px rgba(241,170,0,0.28)",
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-gray-400 font-medium">
              We&apos;ll also open WhatsApp so you can chat directly.
            </p>
          </div>

        </form>
      </div>
    </motion.div>
  );
}
