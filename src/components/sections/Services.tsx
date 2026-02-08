"use client";

import { motion } from "framer-motion";
import { FileText, Video, Crown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    id: "email",
    icon: FileText,
    title: "Email Diagnostic",
    subtitle: "Quick Analysis",
    price: "$97",
    description:
      "Submit your symptoms, codes, and audio/video files. Receive a detailed written analysis with guided next steps.",
    features: [
      "3-hour response guarantee",
      "Audio/video file analysis",
      "Detailed written report",
      "Priority code interpretation",
    ],
    popular: false,
    cta: "Get Email Diagnosis",
  },
  {
    id: "video",
    icon: Video,
    title: "Live Consultation",
    subtitle: "Video Call",
    price: "$197",
    description:
      "30-minute live video call for real-time diagnosis. Perfect for complex issues that need interactive troubleshooting.",
    features: [
      "30-min 1-on-1 video call",
      "Real-time screen sharing",
      "Live code analysis",
      "Recording provided",
    ],
    popular: true,
    cta: "Book Video Call",
  },
  {
    id: "retainer",
    icon: Crown,
    title: "VIP Retainer",
    subtitle: "Priority Access",
    price: "$297/mo",
    description:
      "Unlimited priority access for independent shops and serious enthusiasts. Skip the queue, every time.",
    features: [
      "Unlimited email diagnostics",
      "Priority 1-hour response",
      "Direct line access",
      "Monthly strategy call",
    ],
    popular: false,
    cta: "Join as VIP",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">
            Service Tiers
          </Badge>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#EAEAEA] mb-4">
            Choose Your Diagnostic Path
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            From quick email consultations to VIP retainer access. Every tier
            comes with the same Master Technician expertise.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#1A1A1E] border rounded-lg p-8 ${
                service.popular
                  ? "border-[#3461D2] shadow-lg shadow-[#3461D2]/10"
                  : "border-[#2A2A2E]"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Most Popular</Badge>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    service.popular
                      ? "bg-[#3461D2]"
                      : "bg-[#2A2A2E]"
                  }`}
                >
                  <service.icon
                    size={24}
                    className={service.popular ? "text-white" : "text-[#C0C0C0]"}
                  />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-[#EAEAEA]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#666]">{service.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-mono font-bold text-[#EAEAEA]">
                  {service.price}
                </span>
              </div>

              <p className="text-[#A0A0A0] text-sm mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-[#34D275] flex-shrink-0" />
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
