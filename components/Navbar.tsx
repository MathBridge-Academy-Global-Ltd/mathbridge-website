"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X, Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Header ── */}
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-[1000] h-[72px] border-b",
          "transition-all duration-[220ms] ease-in-out",
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-primaryBlue/10 shadow-[0_2px_24px_rgba(0,9,175,0.08)]"
            : "bg-white border-transparent",
        ].join(" ")}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="MathBridge Home"
            className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/mathbridge-logo.png"
              alt="MathBridge Logo"
              width={120}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 mx-auto"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative inline-flex flex-col items-center px-4 py-2 rounded-lg",
                    "text-[15px] transition-colors duration-200",
                    isActive
                      ? "text-primaryBlue font-semibold"
                      : "text-gray font-medium hover:text-primaryBlue",
                  ].join(" ")}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute bottom-1 left-4 right-4 h-0.5 bg-primaryBlue rounded-full",
                      "origin-left transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0 ml-auto">
            <Link
              href="/contact"
              id="navbar-cta-btn"
              className={[
                "inline-flex items-center gap-2 px-[22px] py-[10px]",
                "bg-primaryBlue text-white text-[15px] font-semibold rounded-full",
                "shadow-[0_4px_14px_rgba(0,9,175,0.28)]",
                "transition-all duration-200",
                "hover:bg-[#0008d4] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,9,175,0.38)]",
                "active:translate-y-0",
              ].join(" ")}
            >
              Book Free Demo
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="navbar-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-[10px] bg-transparent border-none cursor-pointer text-gray transition-all duration-200 hover:bg-primaryBlue/[0.06] hover:text-primaryBlue"
          >
            <span
              className={[
                "transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100",
              ].join(" ")}
            >
              {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2} />}
            </span>
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[999] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className={[
            "absolute inset-0 bg-black/50 backdrop-blur-sm",
            "transition-opacity duration-[350ms]",
            menuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Drawer panel */}
        <div
          className={[
            "absolute top-0 right-0 bottom-0 w-[min(320px,85vw)]",
            "bg-white shadow-[-8px_0_40px_rgba(0,0,0,0.15)]",
            "flex flex-col overflow-y-auto",
            "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-primaryBlue/[0.08]">
            <Image
              src="/mathbridge-logo.png"
              alt="MathBridge"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-transparent border-none text-gray cursor-pointer transition-all duration-200 hover:bg-primaryBlue/[0.06] hover:text-primaryBlue hover:rotate-90"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-col py-4 flex-1"
            aria-label="Mobile navigation links"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "group flex items-center justify-between px-6 py-4",
                    "text-[17px] border-l-[3px] transition-colors duration-200",
                    isActive
                      ? "text-primaryBlue font-bold border-primaryGold bg-primaryBlue/[0.04]"
                      : "text-gray font-medium border-transparent hover:text-primaryBlue hover:bg-primaryBlue/[0.04] hover:border-primaryBlue",
                  ].join(" ")}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                    // Stagger in on open, instant fade-out on close
                    transition: menuOpen
                      ? `opacity 350ms cubic-bezier(0.4,0,0.2,1) ${i * 60 + 120}ms, transform 350ms cubic-bezier(0.4,0,0.2,1) ${i * 60 + 120}ms, color 200ms, background-color 200ms, border-color 200ms`
                      : "opacity 180ms ease, transform 180ms ease, color 200ms, background-color 200ms, border-color 200ms",
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Drawer footer CTA */}
          <div className="p-6 border-t border-primaryBlue/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={[
                "flex items-center justify-center gap-2 w-full px-6 py-3.5",
                "bg-primaryBlue text-white text-base font-bold rounded-full",
                "tracking-wide shadow-[0_4px_16px_rgba(0,9,175,0.3)]",
                "transition-all duration-200",
                "hover:bg-[#0008d4] hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(0,9,175,0.4)]",
              ].join(" ")}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: menuOpen
                  ? `opacity 350ms cubic-bezier(0.4,0,0.2,1) ${3 * 60 + 160}ms, transform 350ms cubic-bezier(0.4,0,0.2,1) ${3 * 60 + 160}ms`
                  : "opacity 180ms ease, transform 180ms ease",
              }}
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
