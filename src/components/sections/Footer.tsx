"use client";

import { Mail, Clock, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Griffin Logo Mark */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
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
            </div>
            <p className="text-[#666] text-sm max-w-sm mb-6 leading-relaxed">
              Expert-level Porsche diagnosis for independent shops and DIY
              enthusiasts. 20+ years of Master-Certified experience, now
              accessible remotely and in-person.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#999999]">
                <Clock size={14} className="text-[#D5001C]" />
                <span>Mon-Fri: Business Hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#999999]">
                <Mail size={14} className="text-[#D5001C]" />
                <a
                  href="mailto:contact@griffindiagnostics.com"
                  className="hover:text-[#F5F5F5] transition-colors"
                >
                  contact@griffindiagnostics.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#999999]">
                <MapPin size={14} className="text-[#D5001C]" />
                <span>Remote & In-Person Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#F5F5F5] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Remote Diagnostic
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Live Consultation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Shop Support
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-[#F5F5F5] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#666] hover:text-[#F5F5F5] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666]">
            &copy; {currentYear} Griffin Diagnostics. All rights reserved.
          </p>
          <p className="text-xs text-[#666]">
            Not affiliated with Porsche AG. Porsche is a registered trademark of
            Dr. Ing. h.c. F. Porsche AG.
          </p>
        </div>
      </div>
    </footer>
  );
}
