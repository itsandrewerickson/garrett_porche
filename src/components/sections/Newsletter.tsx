"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Integrate with Supabase
    // For now, simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-24 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 h-1 bg-[#D5001C] mb-6 mx-auto" />

          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#F5F5F5] mb-4 tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            STAY INFORMED
          </h2>

          <p className="text-[#999999] mb-8 max-w-2xl mx-auto">
            Technical insights, common fault analysis, and diagnostic guides.
            Written for enthusiasts and professionals who want deeper
            understanding of Porsche systems.
          </p>

          {/* Topics Preview */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-[#1C1C1C] border border-[#2A2A2A] text-xs text-[#666] uppercase tracking-wider">
              Technical Deep Dives
            </span>
            <span className="px-3 py-1 bg-[#1C1C1C] border border-[#2A2A2A] text-xs text-[#666] uppercase tracking-wider">
              Common Faults
            </span>
            <span className="px-3 py-1 bg-[#1C1C1C] border border-[#2A2A2A] text-xs text-[#666] uppercase tracking-wider">
              Diagnostic Tips
            </span>
          </div>

          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              isLoading={status === "loading"}
              disabled={status === "success"}
              className="whitespace-nowrap"
            >
              {status === "success" ? (
                <>
                  <Check size={16} className="mr-2" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-[#666] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
