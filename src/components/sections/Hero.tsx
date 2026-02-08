"use client";

import { motion } from "framer-motion";
import { Target, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Red accent line */}
            <div className="w-16 h-1 bg-[#D5001C] mb-8" />

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] leading-[1.15] mb-6 tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              STOP THROWING PARTS AT YOUR PORSCHE.
              <br />
              <span className="text-[#D5001C]">GET MASTER-LEVEL DIAGNOSIS ON DEMAND.</span>
            </h1>

            <p className="text-lg text-[#999999] mb-8 max-w-lg leading-relaxed">
              Direct access to a Porsche Master Technician. Solve complex electrical
              and mechanical faults without the dealership runaround.
            </p>

            {/* Value props - Porsche style cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <Target size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Expert Access</p>
                <p className="text-xs text-[#666]">Direct Master Tech line</p>
              </div>
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <DollarSign size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Save Thousands</p>
                <p className="text-xs text-[#666]">No more guessing parts</p>
              </div>
              <div className="bg-[#141414] border border-[#2A2A2A] p-4">
                <Clock size={20} className="text-[#D5001C] mb-2" />
                <p className="text-sm font-medium text-[#F5F5F5]">Same Day</p>
                <p className="text-xs text-[#666]">Answers when you need them</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/book?type=diagnostic">
                Schedule Diagnostic
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4]">
              {/* Main image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/hero2.jpg"
                  alt="Griffin Diagnostics - Expert Porsche diagnostic services"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-40 lg:opacity-60" />
              </div>

              {/* Red corner accent */}
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#D5001C]" />
              <div className="absolute bottom-0 left-0 w-1 h-24 bg-[#D5001C]" />

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#2A2A2A] p-4"
              >
                <p className="text-2xl font-semibold text-[#F5F5F5]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  20+ Years
                </p>
                <p className="text-xs text-[#999999] uppercase tracking-wider">Porsche Master Tech</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
