"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Reed",
    role: "997 GT3 Owner",
    quote:
      "Solved my CAN bus communication issue in 20 minutes. I'd already replaced two modules chasing this gremlin. Griffin traced it to a corroded ground point I never would have found. Saved me thousands.",
  },
  {
    name: "Mark Lane",
    role: "Owner, Austin European Auto Specialist",
    quote:
      "We had a 991 Turbo sitting for three weeks with an intermittent DME fault. One video session with Griffin and we had the root cause isolated. That car is now out the door and the customer is thrilled.",
  },
  {
    name: "Luke Nash",
    role: "Owner, Nashville Porsche Specialists",
    quote:
      "It's like having a remote shop foreman with 20 years at the dealer. Griffin has raised our entire team's diagnostic confidence. We're taking on jobs now that we would have sent away before.",
  },
  {
    name: "Paul Gray",
    role: "Cayman S Track Enthusiast",
    quote:
      "No fluff, no upsell, just clean diagnosis. My PASM warning was a $3 connector issue, not the $2,800 shock the dealer quoted. Live data analysis showed exactly what was happening. Worth every penny.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-16 h-1 bg-[#D5001C] mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#F5F5F5] mb-4 tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            CLIENT RESULTS
          </h2>
          <p className="text-[#999999] max-w-2xl">
            From track-day enthusiasts to independent shop owners—real diagnostic wins
            from real Porsche owners and professionals.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#141414] border border-[#2A2A2A] p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote size={32} className="text-[#D5001C] opacity-20" />
              </div>

              {/* Red accent line */}
              <div className="w-8 h-0.5 bg-[#D5001C] mb-6" />

              <blockquote className="text-[#C0C0C0] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center text-sm font-semibold text-[#D5001C]">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">{testimonial.name}</p>
                  <p className="text-xs text-[#666] uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
