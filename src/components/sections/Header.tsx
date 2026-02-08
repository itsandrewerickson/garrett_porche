"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Results" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            {/* Griffin Logo Mark */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                {/* Shield shape with griffin silhouette */}
                <path
                  d="M20 2L4 8V18C4 28 11 36 20 38C29 36 36 28 36 18V8L20 2Z"
                  fill="#D5001C"
                />
                <path
                  d="M20 6L8 10.5V18C8 26 13.5 32.5 20 34C26.5 32.5 32 26 32 18V10.5L20 6Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M16 15C16 15 18 14 20 16C22 18 24 17 24 17L26 20C26 20 23 22 20 20C17 18 14 20 14 20L16 15Z"
                  fill="#D5001C"
                  opacity="0.9"
                />
                <path
                  d="M15 22L14 26L17 25L18 28L20 24L22 28L23 25L26 26L25 22"
                  fill="#D5001C"
                  opacity="0.9"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F5F5F5] tracking-[0.15em] uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Griffin
              </p>
              <p className="text-[10px] text-[#999999] tracking-[0.2em] uppercase">
                Diagnostics
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#999999] hover:text-[#F5F5F5] transition-colors font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" href="/book?type=header">
              Book Diagnostic
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#999999] hover:text-[#F5F5F5]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#2A2A2A]"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#999999] hover:text-[#F5F5F5] transition-colors py-2 tracking-wide uppercase text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" className="mt-2" href="/book?type=mobile-menu">
                Book Diagnostic
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
