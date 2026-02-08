import { Suspense } from "react";
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { Badge } from "@/components/ui/Badge";
import { Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Diagnostic | Garrett Porsche Diagnostics",
  description:
    "Book your expert Porsche diagnostic session. Get a guaranteed diagnosis within 3 business hours from a Level 3 Master Technician.",
};

function BookingFormLoader() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#1A1A1E] border border-[#2A2A2E] rounded-lg p-8 animate-pulse">
        <div className="h-8 bg-[#2A2A2E] rounded w-1/2 mb-4" />
        <div className="h-4 bg-[#2A2A2E] rounded w-3/4 mb-8" />
        <div className="space-y-4">
          <div className="h-20 bg-[#2A2A2E] rounded" />
          <div className="h-20 bg-[#2A2A2E] rounded" />
          <div className="h-20 bg-[#2A2A2E] rounded" />
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Start Your Diagnostic
            </Badge>
            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-4">
              Book Your Session
            </h1>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto mb-8">
              Get expert analysis from a Porsche Master Technician. Submit your
              issue and receive actionable guidance to fix your car.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#C0C0C0]">
                <Clock size={16} className="text-[#3461D2]" />
                <span>3-Hour Response</span>
              </div>
              <div className="flex items-center gap-2 text-[#C0C0C0]">
                <Award size={16} className="text-[#3461D2]" />
                <span>Master Certified</span>
              </div>
              <div className="flex items-center gap-2 text-[#C0C0C0]">
                <Shield size={16} className="text-[#3461D2]" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <Suspense fallback={<BookingFormLoader />}>
            <BookingForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
