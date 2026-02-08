"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Reed",
    role: "Porsche Owner, 10+ Years",
    quote:
      "I've owned Porsches over a decade. Griffin helped pinpoint an intermittent issue I couldn't solve alone. Finally got clarity on a problem that had plagued me for months.",
  },
  {
    name: "Mark Lane",
    role: "Independent Shop Owner",
    quote:
      "Rapid isolation of CAN communication and module issues post-repairs. Griffin's expertise has reduced our rework and labor costs significantly. An invaluable resource for our shop.",
  },
  {
    name: "Luke Nash",
    role: "Independent Shop Owner",
    quote:
      "It's like having a remote shop foreman. Griffin provides diagnostic strategy that raises our entire team's confidence. We tackle jobs now that we would have turned away before.",
  },
  {
    name: "Paul Gray",
    role: "DIY 997 Owner",
    quote:
      "No fluff, no upsell, just clean diagnosis. Live data analysis that actually explained what was happening. Worth every penny for the peace of mind alone.",
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
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-[#999999] max-w-2xl">
            From DIY enthusiasts to independent shop owners—hear from those who&apos;ve
            experienced precision Porsche diagnostics.
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
