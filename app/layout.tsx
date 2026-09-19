import type { Metadata } from "next";
import { Montserrat, Kavoon } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kavoon = Kavoon({
  variable: "--font-kavoon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MathBridge - Accessible & Personalized Learning",
  description:
    "An education and EdTech platform focused on making math learning more accessible, engaging, and personalized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${kavoon.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Preloader />
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
