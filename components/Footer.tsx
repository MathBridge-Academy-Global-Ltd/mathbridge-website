import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ChevronRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from "@/components/icons";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const contactLinks = [
  { href: "tel:+2347048615201", label: "+234 704 861 5201", Icon: Phone },
  { href: "mailto:mathbridge.ng@gmail.com", label: "mathbridge.ng@gmail.com", Icon: Mail },
  { href: "https://wa.me/2347048615201", label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://www.instagram.com/mathbridge.academy?stkn=MXRkc3oxYXowc3QxaQ==", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.tiktok.com/@mathbridge?_r=1&_t=ZS-99dfPrOGDFU", label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* ── Gold base + math pattern background ── */}
      <div className="absolute inset-0 bg-primaryGold" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/background.png"
          alt=""
          fill
          className="object-cover opacity-99"
          quality={90}
        />
      </div>
      {/* Dark navy gradient from ~40% down so bottom bar is deep blue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-primaryBlue/80 via-primaryBlue/90 to-primaryBlue/98"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-14 pb-10 flex flex-wrap gap-12 justify-between">
        {/* Brand */}
        <div className="flex-1 basis-[260px] max-w-sm">
          <Link href="/" aria-label="MathBridge Home">
            <Image
              src="/mathbridge-logo.png"
              alt="MathBridge Logo"
              width={130}
              height={38}
              className="h-14 w-auto object-contain [filter:brightness(0)_invert(1)] opacity-95 transition-opacity duration-200 hover:opacity-100"
            />
          </Link>
          <p className="text-[0.9rem] leading-[1.75] text-white/70 m-0">
            Personalized online tutoring that builds confidence
            <br />
            and delivers results, one student at a time.
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-12 flex-wrap">
          {/* Pages */}
          <div className="min-w-[120px]">
            <h3 className="text-[0.8rem] font-bold text-white/50 uppercase tracking-[0.1em] mb-5">
              Pages
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/70 text-[0.9375rem] no-underline transition-all duration-400 hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight
                      size={14}
                      className="w-0 overflow-hidden opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-400 shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-[160px]">
            <h3 className="text-[0.8rem] font-bold text-white/50 uppercase tracking-[0.1em] mb-5">
              Contact
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {contactLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2 text-white/70 text-[0.9375rem] no-underline transition-all duration-400 hover:text-white hover:translate-x-1"
                  >
                    <Icon
                      size={15}
                      className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-400"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/[0.12]">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[0.875rem] text-white/50 m-0">
            &copy; {new Date().getFullYear()} MathBridge. All rights reserved.
          </p>
          <p className="text-[0.875rem] text-white/80 font-bold m-0">
            Empowering learners, one session at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
