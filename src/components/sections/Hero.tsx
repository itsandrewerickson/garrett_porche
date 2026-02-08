"use client";

import { motion } from "framer-motion";
import { Target, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />

      {/* Decorative diagonal line - Porsche style */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-[#D5001C] to-transparent transform -skew-x-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Red accent line */}
            <div className="w-16 h-1 bg-[#D5001C] mb-8" />

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#F5F5F5] leading-[1.1] mb-6 tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              EXPERT PORSCHE
              <br />
              <span className="text-[#D5001C]">DIAGNOSTICS</span>
            </h1>

            <p className="text-lg text-[#999999] mb-8 max-w-lg leading-relaxed">
              Precision fault isolation for independent shops and DIY enthusiasts.
              Founded by a Porsche Master-Certified technician with 20+ years
              of experience. No guesswork. No unnecessary parts.
            </p>

            {/* Value props - Porsche style cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <Target size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Expert Access</p>
                <p className="text-xs text-[#666]">Direct specialist communication</p>
              </div>
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <DollarSign size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Cost Savings</p>
                <p className="text-xs text-[#666]">Accurate first-time diagnosis</p>
              </div>
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <Clock size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Less Downtime</p>
                <p className="text-xs text-[#666]">Faster fault resolution</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/book">
                Schedule Diagnostic
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#141414] border border-[#2A2A2A] p-8">
              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-1 bg-[#D5001C] transform rotate-45 translate-x-8 -translate-y-4" />
              </div>

              <p
                className="text-xs text-[#666] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Why Griffin Diagnostics
              </p>

              <div className="space-y-6">
                <div className="border-b border-[#2A2A2A] pb-6">
                  <p className="text-3xl font-semibold text-[#F5F5F5] mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    20+ Years
                  </p>
                  <p className="text-sm text-[#999999]">
                    Porsche Master-Certified Experience
                  </p>
                </div>

                <div className="border-b border-[#2A2A2A] pb-6">
                  <p className="text-3xl font-semibold text-[#F5F5F5] mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Remote & In-Person
                  </p>
                  <p className="text-sm text-[#999999]">
                    Flexible diagnostic sessions for shops & individuals
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-[#F5F5F5] mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    No Guesswork
                  </p>
                  <p className="text-sm text-[#999999]">
                    Data-driven recommendations, methodical problem-solving
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2A2A2A]">
                <Button variant="primary" className="w-full" href="/book">
                  Start Your Diagnostic
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
