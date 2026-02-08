"use client";

import { Mail, Clock, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0A0A0D] border-t border-[#1A1A1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#3461D2] flex items-center justify-center">
                <span className="font-mono font-bold text-white text-lg">
                  GT
                </span>
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-[#EAEAEA] tracking-wider">
                  GARRETT TECH
                </p>
                <p className="text-xs text-[#666] tracking-widest">
                  PORSCHE DIAGNOSTICS
                </p>
              </div>
            </div>
            <p className="text-[#666] text-sm max-w-sm mb-6">
              Expert remote diagnostics from a Level 3 Master Technician. 17
              years of dealership experience, now accessible to everyone.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                <Clock size={14} className="text-[#3461D2]" />
                <span>Mon-Fri: 8:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                <Mail size={14} className="text-[#3461D2]" />
                <a
                  href="mailto:garrett@porschediagnostics.com"
                  className="hover:text-[#EAEAEA] transition-colors"
                >
                  garrett@porschediagnostics.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                <MapPin size={14} className="text-[#3461D2]" />
                <span>Remote Service - Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-[#EAEAEA] tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  Email Diagnostic
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  Live Consultation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  VIP Retainer
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  Blog / Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-[#EAEAEA] tracking-wider mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  About Garrett
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#666] hover:text-[#EAEAEA] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1A1A1E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666]">
            &copy; {currentYear} Garrett Tech Porsche Diagnostics. All rights
            reserved.
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
