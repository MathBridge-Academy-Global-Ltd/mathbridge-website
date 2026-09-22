"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  // Subjects
  "Mathematics Tutoring",
  "English Language Tutoring",
  "Physics Tutoring",
  "Chemistry Tutoring",
  "Biology Tutoring",
  "Other Subjects",
  // Services
  "Online One-on-One Tutoring",
  "After School Classes",
  "STEM Education",
  "Digital Literacy Training",
  "Exam Preparation",
  "Academic Mentoring",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // 1. Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message || "No additional message",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2. Redirect to WhatsApp
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
      const message = `Hello, my name is ${data.name} and I want to make an enquiry about ${data.service}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      setSubmitSuccess(true);
      reset();
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError("Something went wrong. Please try again or contact us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[24px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-10"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              className={`w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#0009af]/20 ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#0009af]'}`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
              className={`w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#0009af]/20 ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#0009af]'}`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone & Service Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number (WhatsApp) *</label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. +234 800 000 0000"
              {...register("phone")}
              className={`w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#0009af]/20 ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#0009af]'}`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Required *</label>
            <div className="relative">
              <select
                id="service"
                {...register("service")}
                defaultValue=""
                className={`w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#0009af]/20 ${errors.service ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#0009af]'}`}
              >
                <option value="" disabled>Select a subject/service</option>
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message (Optional)</label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={4}
            {...register("message")}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 transition-colors focus:outline-none focus:border-[#0009af] focus:ring-2 focus:ring-[#0009af]/20 resize-none"
          />
        </div>

        {/* Submit Status */}
        {submitError && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {submitError}
          </div>
        )}
        
        {submitSuccess && (
          <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100">
            Message sent successfully! Redirecting you to WhatsApp...
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#101928] hover:bg-[#1a2538] text-white text-sm font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
      </form>
    </motion.div>
  );
}
