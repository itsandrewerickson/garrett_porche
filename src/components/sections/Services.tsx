"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    id: "remote",
    // TODO: Replace with garrett-working-on-911-engine.jpg when available
    image: "/images/stock-diyer.png",
    title: "Remote Strategy Session",
    subtitle: "DIY & Enthusiasts",
    price: "From $150",
    description:
      "Strategic fault isolation and repair roadmaps. Submit your symptoms, fault codes, and data logs. Receive a clear action plan—not guesswork.",
    features: [
      "Strategic fault isolation",
      "Repair roadmap & parts list",
      "Live data interpretation",
      "Follow-up support included",
    ],
    popular: false,
    cta: "Book Strategy Session",
    queryParam: "remote",
  },
  {
    id: "consultation",
    image: "/images/hero1.jpg",
    title: "Live Video Diagnostics",
    subtitle: "Real-Time PIWIS Support",
    price: "From $250",
    description:
      "Real-time PIWIS and screen sharing support. Work through complex electrical and mechanical faults together with a Master Tech guiding every step.",
    features: [
      "Live PIWIS/screen sharing",
      "Real-time fault tracing",
      "Direct Master Tech guidance",
      "Session recording provided",
    ],
    popular: true,
    cta: "Book Live Session",
    queryParam: "live",
  },
  {
    id: "shop",
    // TODO: Replace with porsche-shop-piwis-tester.jpg when available
    image: "/images/stock-mechanic-shop.png",
    title: "Shop Emergency Support",
    subtitle: "Independent Shops",
    price: "Custom",
    description:
      "Like having a remote shop foreman. Increase your billable hours by solving stuck cars faster. Priority response for your toughest diagnostic challenges.",
    features: [
      "Priority emergency response",
      "Team training sessions",
      "Diagnostic strategy support",
      "Monthly consultation calls",
    ],
    popular: false,
    cta: "Book Shop Onboarding",
    queryParam: "shop",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
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
            DIAGNOSTIC SERVICES
          </h2>
          <p className="text-[#999999] max-w-2xl">
            Premium Porsche diagnostic support tailored to your needs. From DIY enthusiasts
            protecting their investment to independent shops increasing their diagnostic capacity.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#141414] border overflow-hidden ${
                service.popular
                  ? "border-[#D5001C]"
                  : "border-[#2A2A2A]"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D5001C] z-10" />
              )}

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-semibold text-[#F5F5F5]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-[#F5F5F5] text-lg">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#666] uppercase tracking-wider">{service.subtitle}</p>
                </div>

                <p className="text-[#999999] text-sm mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check size={14} className="text-[#D5001C] flex-shrink-0" />
                      <span className="text-[#C0C0C0]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={service.popular ? "primary" : "secondary"}
                  className="w-full group"
                  href={`/book?type=${service.queryParam}`}
                >
                  {service.cta}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
