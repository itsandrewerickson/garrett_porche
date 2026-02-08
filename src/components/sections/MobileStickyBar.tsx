"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 500px)
      const scrolled = window.scrollY > 500;
      setHasScrolled(scrolled);
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Gradient fade at top */}
          <div className="h-4 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

          {/* Main bar */}
          <div className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-4 py-3 pb-safe">
            <Link
              href="/book?type=mobile"
              className="flex items-center justify-center gap-2 w-full bg-[#D5001C] text-white font-semibold uppercase tracking-wide text-sm py-4 hover:bg-[#E31B2E] transition-colors"
            >
              <Calendar size={18} />
              Book Now — Get Answers Today
            </Link>
            <p className="text-center text-xs text-[#666] mt-2">
              Standing next to your car? Schedule a live session.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
