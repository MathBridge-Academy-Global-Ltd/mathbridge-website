import Image from "next/image";
import Link from "next/link";
import { Mail, ChevronRight } from "lucide-react";

/* ── Brand SVGs not available in lucide-react ── */
function WhatsAppIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
    </svg>
  );
}

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const contactLinks = [
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
          className="object-cover opacity-90"
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
              className="h-10 w-auto object-contain [filter:brightness(0)_invert(1)] opacity-95 transition-opacity duration-200 hover:opacity-100"
            />
          </Link>
          <p className="mt-3 mb-2 text-[1.5rem] font-extrabold tracking-tight text-white">
            MATHBridge
          </p>
          <p className="text-[0.9rem] leading-[1.75] text-white/70 m-0">
            Personalized online tutoring that builds confidence
            <br />
            and delivers results — one student at a time.
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
