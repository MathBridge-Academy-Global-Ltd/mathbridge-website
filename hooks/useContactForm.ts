"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactFormSchema, type ContactFormData } from "@/lib/contact/contactSchema";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
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

      // 2. Build WhatsApp deep-link and open in new tab
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
      const displayName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      const text = `Hello, my name is ${displayName} and I want to make an enquiry about ${data.service}.`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      setSubmitSuccess(true);
      form.reset();
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
    submitSuccess,
    submitError,
  };
}
