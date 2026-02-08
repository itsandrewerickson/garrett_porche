"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1115] via-[#0F1115] to-[#1A2040] opacity-80" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#3461D2 1px, transparent 1px), linear-gradient(90deg, #3461D2 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="gold">Porsche Master Gold</Badge>
              <Badge variant="default">BMW Master</Badge>
              <Badge variant="default">ASE Certified</Badge>
            </div>

            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EAEAEA] leading-tight mb-6">
              Expert Porsche
              <br />
              <span className="text-[#3461D2]">Diagnostics</span>
              <br />
              in 3 Hours
            </h1>

            <p className="text-lg text-[#A0A0A0] mb-8 max-w-lg">
              Skip the 3-week dealership wait. Get a guaranteed &quot;Guided
              Next Steps&quot; report from a Level 3 Master Technician with 17
              years of experience.
            </p>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <Clock size={18} className="text-[#3461D2]" />
                <span>3-Hour Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <Shield size={18} className="text-[#3461D2]" />
                <span>17 Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <Zap size={18} className="text-[#3461D2]" />
                <span>Remote & Immediate</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/book">
                Get Your Diagnosis
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - SLA Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#1A1A1E] border border-[#2A2A2E] rounded-lg p-8 shadow-2xl">
              <div className="absolute -top-3 left-6">
                <Badge variant="accent">Live Availability</Badge>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#666] font-mono uppercase tracking-wider mb-2">
                  Current Response Time
                </p>
                <p className="text-3xl font-mono font-bold text-[#34D275] mb-4">
                  &lt; 3 Hours
                </p>

                <div className="border-t border-[#2A2A2E] pt-4 mt-4">
                  <p className="text-sm text-[#A0A0A0] mb-4">
                    Submit your diagnostic request now and receive expert
                    analysis by{" "}
                    <span className="text-[#EAEAEA] font-semibold">
                      end of business today
                    </span>
                  </p>

                  <div className="bg-[#0F1115] rounded p-4 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#666]">Business Hours (PST)</span>
                      <span className="font-mono text-[#EAEAEA]">
                        8:00 AM - 4:00 PM
                      </span>
                    </div>
                  </div>

                  <Button variant="primary" className="w-full" href="/book">
                    Start Diagnostic Request
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#0F1115] border border-[#2A2A2E] rounded-lg p-4 shadow-xl"
            >
              <p className="text-2xl font-mono font-bold text-[#EAEAEA]">
                500+
              </p>
              <p className="text-xs text-[#666]">Diagnostics Completed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
