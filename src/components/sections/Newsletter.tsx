"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

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
    <section className="py-24 bg-[#0F1115] border-t border-[#1A1A1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="accent" className="mb-4">
            <Mail size={12} className="mr-1" />
            The Over-Rev Report
          </Badge>

          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#EAEAEA] mb-4">
            Porsche Engineering Deep Dives
          </h2>

          <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
            Bi-weekly technical insights, common fault analysis, and retrofit
            guides. Written by a Master Tech for enthusiasts who want to
            understand their machines.
          </p>

          {/* Topics Preview */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-[#1A1A1E] rounded-full text-xs text-[#666]">
              IMS Bearing Reality Check
            </span>
            <span className="px-3 py-1 bg-[#1A1A1E] rounded-full text-xs text-[#666]">
              PDK vs Manual Myths
            </span>
            <span className="px-3 py-1 bg-[#1A1A1E] rounded-full text-xs text-[#666]">
              Cooling System Deep Dive
            </span>
            <span className="px-3 py-1 bg-[#1A1A1E] rounded-full text-xs text-[#666]">
              Retrofit Coding Tips
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
            No spam. Unsubscribe anytime. ~2 emails per month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
