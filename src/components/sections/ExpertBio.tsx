"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Cpu, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const certifications = [
  { label: "Porsche Master Gold", icon: Award, variant: "gold" as const },
  { label: "BMW Master Tech", icon: Award, variant: "default" as const },
  { label: "ASE Certified", icon: Award, variant: "default" as const },
  { label: "EV Specialist", icon: Cpu, variant: "accent" as const },
  { label: "Diesel Certified", icon: Wrench, variant: "default" as const },
];

const specialties = [
  {
    title: "Retrofits & OEM+",
    description:
      "CarPlay integration, coding, and factory-level upgrades without aftermarket compromises.",
    icon: Cpu,
  },
  {
    title: "NVH Diagnosis",
    description:
      "Noise, Vibration, Harshness complaints that dealers mark as 'Normal Operation' - I find the root cause.",
    icon: Volume2,
  },
  {
    title: '"No Fault Found" Resolution',
    description:
      "Intermittent issues that escape standard diagnostics. I specialize in the problems others give up on.",
    icon: Wrench,
  },
];

export function ExpertBio() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#1A1A1E] to-[#2A2A2E] rounded-lg overflow-hidden">
              {/* Placeholder for actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#3461D2]/20 flex items-center justify-center border-2 border-[#3461D2]/50">
                    <span className="font-mono text-4xl font-bold text-[#3461D2]">
                      G
                    </span>
                  </div>
                  <p className="text-[#666] text-sm font-mono">
                    [Photo Placeholder]
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0A0D] to-transparent" />
            </div>

            {/* Experience badge - repositioned on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-[#3461D2] rounded-lg p-4 sm:p-6 shadow-xl"
            >
              <p className="text-3xl sm:text-4xl font-mono font-bold text-white">17</p>
              <p className="text-xs sm:text-sm text-white/80">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="accent" className="mb-4">
              The Expert
            </Badge>

            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#EAEAEA] mb-4">
              Meet Garrett
            </h2>

            <p className="text-lg text-[#A0A0A0] mb-6">
              Level 3 Master Technician. Technical Investigator. The guy
              dealerships call when they&apos;re stuck.
            </p>

            <p className="text-[#666] mb-8">
              After 17 years at authorized dealerships, I&apos;ve seen every
              failure mode, every intermittent gremlin, and every &quot;can&apos;t
              duplicate&quot; complaint. Now I bring that expertise directly to
              you—remotely, immediately, and without the 3-week wait.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-8">
              {certifications.map((cert) => (
                <Badge key={cert.label} variant={cert.variant}>
                  <cert.icon size={12} className="mr-1" />
                  {cert.label}
                </Badge>
              ))}
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              {specialties.map((specialty) => (
                <div
                  key={specialty.title}
                  className="flex gap-4 p-4 bg-[#1A1A1E] rounded-lg border border-[#2A2A2E]"
                >
                  <div className="w-10 h-10 rounded bg-[#2A2A2E] flex items-center justify-center flex-shrink-0">
                    <specialty.icon size={20} className="text-[#3461D2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EAEAEA] mb-1">
                      {specialty.title}
                    </h4>
                    <p className="text-sm text-[#666]">{specialty.description}</p>
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
