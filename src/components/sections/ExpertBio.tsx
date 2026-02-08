"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Search, MessageSquare } from "lucide-react";

const expertise = [
  {
    title: "Precision Over Speed",
    description:
      "Methodical problem-solving that rejects unnecessary parts replacement in favor of accurate fault isolation.",
    icon: Search,
  },
  {
    title: "Transparent Guidance",
    description:
      "Clear communication on what's wrong, why it failed, and exactly what needs fixing. No fluff, no upsell.",
    icon: MessageSquare,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Live data analysis and systematic testing to identify root causes, not just symptoms.",
    icon: Wrench,
  },
];

export function ExpertBio() {
  return (
    <section id="about" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#1C1C1C] relative overflow-hidden">
              {/* Placeholder for actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#D5001C]/10 flex items-center justify-center border border-[#D5001C]/30">
                    <Award size={40} className="text-[#D5001C]" />
                  </div>
                  <p className="text-[#666] text-sm tracking-wider uppercase">
                    Master Certified
                  </p>
                </div>
              </div>

              {/* Red corner accent */}
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-[#D5001C]" />
              <div className="absolute bottom-0 left-0 w-1 h-32 bg-[#D5001C]" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#D5001C] p-6"
            >
              <p className="text-4xl font-semibold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>20+</p>
              <p className="text-sm text-white/80 uppercase tracking-wider">Years</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-[#D5001C] mb-6" />

            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#F5F5F5] mb-4 tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              THE EXPERTISE
            </h2>

            <p className="text-lg text-[#999999] mb-6 leading-relaxed">
              Griffin Diagnostics was founded by a former Porsche Master-Certified
              technician with over two decades of experience in precision fault isolation.
            </p>

            <p className="text-[#666] mb-8 leading-relaxed">
              Our focus is on accurate diagnosis and data-driven recommendations—both
              remote and in-person. We emphasize precision over speed, rejecting
              unnecessary parts replacement in favor of methodical problem-solving
              that gets it right the first time.
            </p>

            {/* Expertise cards */}
            <div className="space-y-4">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-[#1C1C1C] border border-[#2A2A2A]"
                >
                  <div className="w-10 h-10 bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#D5001C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F5F5] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#666] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
