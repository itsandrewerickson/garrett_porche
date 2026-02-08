"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Integrate with email service (ConvertKit, Mailchimp, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const faults = [
    "Intermittent DME communication failures",
    "PASM & suspension module errors",
    "IMS bearing warning signs",
    "CAN bus gateway issues",
    "PDK clutch adaptation problems",
  ];

  return (
    <section className="py-24 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="w-16 h-1 bg-[#D5001C] mb-6" />

              <h2
                className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] mb-4 tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                FREE DOWNLOAD
              </h2>

              <h3 className="text-xl text-[#F5F5F5] mb-4">
                The 5 Most Common &quot;Unfixable&quot; 991/992 Faults Checklist
              </h3>

              <p className="text-[#999999] mb-6 leading-relaxed">
                These are the issues shops struggle with most. Learn what to check
                before replacing expensive parts—and when to call for backup.
              </p>

              {/* Fault list preview */}
              <ul className="space-y-2 mb-6">
                {faults.map((fault) => (
                  <li key={fault} className="flex items-start gap-2 text-sm">
                    <AlertTriangle size={14} className="text-[#D5001C] mt-0.5 flex-shrink-0" />
                    <span className="text-[#C0C0C0]">{fault}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="bg-[#1C1C1C] border border-[#2A2A2A] p-6">
              {/* Red accent line */}
              <div className="w-12 h-1 bg-[#D5001C] mb-6" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D5001C]/10 flex items-center justify-center border border-[#D5001C]/30">
                  <FileText size={24} className="text-[#D5001C]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Free Checklist</p>
                  <p className="text-xs text-[#666]">PDF Download</p>
                </div>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#2D8653]/20 flex items-center justify-center">
                    <Check size={24} className="text-[#2D8653]" />
                  </div>
                  <p className="text-[#F5F5F5] font-semibold mb-2">Check your inbox!</p>
                  <p className="text-sm text-[#999999]">
                    The checklist is on its way. Check spam if you don&apos;t see it.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={status === "loading"}
                  >
                    Send Me the Checklist
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <p className="text-xs text-[#666] text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
