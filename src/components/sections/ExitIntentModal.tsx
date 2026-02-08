"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    // Check if modal was already shown this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Integrate with email service
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#141414] border border-[#2A2A2A] p-8 max-w-md w-full shadow-2xl"
          >
            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D5001C]" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#666] hover:text-[#F5F5F5] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 bg-[#D5001C]/10 flex items-center justify-center border border-[#D5001C]/30">
                <FileText size={28} className="text-[#D5001C]" />
              </div>

              <h3
                className="text-2xl font-semibold text-[#F5F5F5] mb-2 tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                WAIT — FREE DOWNLOAD
              </h3>

              <p className="text-[#999999] mb-6">
                Get the <span className="text-[#F5F5F5]">5 Most Common &quot;Unfixable&quot; 991/992 Faults</span> checklist
                before you go.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-[#2D8653]"
                >
                  <Check size={20} />
                  <span>Check your inbox!</span>
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
                </form>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-[#666] hover:text-[#999999] transition-colors"
              >
                No thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
