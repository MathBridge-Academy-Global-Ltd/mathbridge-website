import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactServices = [
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
] as const;
