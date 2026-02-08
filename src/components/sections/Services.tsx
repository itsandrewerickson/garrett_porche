"use client";

import { motion } from "framer-motion";
import { Search, Video, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "remote",
    icon: Search,
    title: "Remote Diagnostic",
    subtitle: "Fault Isolation",
    price: "From $150",
    description:
      "Submit your symptoms, fault codes, and data logs. Receive expert analysis with precise fault isolation and repair recommendations.",
    features: [
      "Detailed fault analysis",
      "Live data interpretation",
      "Repair strategy guidance",
      "Follow-up support included",
    ],
    popular: false,
    cta: "Request Remote Session",
  },
  {
    id: "consultation",
    icon: Video,
    title: "Live Consultation",
    subtitle: "Real-Time Support",
    price: "From $200",
    description:
      "Video call session for complex diagnostics. Work through issues together with screen sharing and real-time data analysis.",
    features: [
      "Live video collaboration",
      "Real-time screen sharing",
      "Direct expert guidance",
      "Session recording provided",
    ],
    popular: true,
    cta: "Book Live Session",
  },
  {
    id: "shop",
    icon: Users,
    title: "Shop Support",
    subtitle: "Independent Shops",
    price: "Custom",
    description:
      "Ongoing diagnostic support for independent repair shops. Like having a remote shop foreman with Porsche master-level expertise.",
    features: [
      "Priority response times",
      "Team training sessions",
      "Diagnostic strategy support",
      "Monthly consultation calls",
    ],
    popular: false,
    cta: "Discuss Partnership",
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
            Expert-level Porsche diagnosis tailored to your needs. Whether you&apos;re a
            DIY enthusiast, independent shop, or dealership seeking a second opinion.
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
              className={`relative bg-[#141414] border p-8 ${
                service.popular
                  ? "border-[#D5001C]"
                  : "border-[#2A2A2A]"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-[#D5001C]" />
              )}

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center ${
                    service.popular
                      ? "bg-[#D5001C]"
                      : "bg-[#1C1C1C]"
                  }`}
                >
                  <service.icon
                    size={24}
                    className={service.popular ? "text-white" : "text-[#999999]"}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F5F5F5]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#666] uppercase tracking-wider">{service.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-semibold text-[#F5F5F5]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {service.price}
                </span>
              </div>

              <p className="text-[#999999] text-sm mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
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
                href={`/book?service=${service.id}`}
              >
                {service.cta}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
