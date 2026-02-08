"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  FileText,
  Video,
  Crown,
  Car,
  MessageSquare,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FileUpload } from "@/components/ui/FileUpload";
import { Badge } from "@/components/ui/Badge";
import { calculateSLA, PORSCHE_MODELS } from "@/lib/utils";

interface FormData {
  // Step 1: Service Selection
  serviceType: "email" | "video" | "retainer" | "";

  // Step 2: Contact Info
  name: string;
  email: string;
  phone: string;

  // Step 3: Vehicle Info
  vehicleYear: string;
  vehicleModel: string;
  vehicleVin: string;

  // Step 4: Issue Details
  symptoms: string;
  errorCodes: string;
  files: File[];
}

const services = [
  {
    id: "email" as const,
    icon: FileText,
    title: "Email Diagnostic",
    price: "$97",
    description: "Written analysis with guided next steps",
    sla: "3-hour response guarantee",
  },
  {
    id: "video" as const,
    icon: Video,
    title: "Live Consultation",
    price: "$197",
    description: "30-minute video call with screen sharing",
    sla: "Book available slots",
  },
  {
    id: "retainer" as const,
    icon: Crown,
    title: "VIP Retainer",
    price: "$297/mo",
    description: "Unlimited priority access",
    sla: "1-hour priority response",
  },
];

const steps = [
  { id: 1, title: "Service", icon: CreditCard },
  { id: 2, title: "Contact", icon: MessageSquare },
  { id: 3, title: "Vehicle", icon: Car },
  { id: 4, title: "Issue", icon: FileText },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => ({
  value: String(currentYear - i),
  label: String(currentYear - i),
}));

const models = PORSCHE_MODELS.map((model) => ({
  value: model,
  label: model,
}));

export function BookingForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") as "email" | "video" | "retainer" | null;

  const [currentStep, setCurrentStep] = useState(serviceParam ? 2 : 1);
  const [slaMessage, setSlaMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    serviceType: serviceParam || "",
    name: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleModel: "",
    vehicleVin: "",
    symptoms: "",
    errorCodes: "",
    files: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  useEffect(() => {
    const { message } = calculateSLA();
    setSlaMessage(message);

    // Update every minute
    const interval = setInterval(() => {
      const { message } = calculateSLA();
      setSlaMessage(message);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const updateFormData = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    switch (step) {
      case 1:
        if (!formData.serviceType) {
          newErrors.serviceType = "Please select a service";
        }
        break;
      case 2:
        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email";
        }
        break;
      case 3:
        if (!formData.vehicleYear) {
          newErrors.vehicleYear = "Year is required";
        }
        if (!formData.vehicleModel) {
          newErrors.vehicleModel = "Model is required";
        }
        break;
      case 4:
        if (!formData.symptoms.trim()) {
          newErrors.symptoms = "Please describe the issue";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    // TODO: Integrate with Stripe and Supabase
    console.log("Form submitted:", formData);
    alert("Form submitted! Stripe integration coming soon.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-2xl font-bold text-[#EAEAEA] mb-2">
                Select Your Service
              </h2>
              <p className="text-[#A0A0A0]">
                Choose the diagnostic option that fits your needs
              </p>
            </div>

            <div className="grid gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => updateFormData("serviceType", service.id)}
                  className={`relative flex items-start gap-4 p-6 rounded-lg border-2 text-left transition-all ${
                    formData.serviceType === service.id
                      ? "border-[#3461D2] bg-[#3461D2]/10"
                      : "border-[#2A2A2E] bg-[#1A1A1E] hover:border-[#3461D2]/50"
                  }`}
                >
                  {formData.serviceType === service.id && (
                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 rounded-full bg-[#3461D2] flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      formData.serviceType === service.id
                        ? "bg-[#3461D2]"
                        : "bg-[#2A2A2E]"
                    }`}
                  >
                    <service.icon
                      size={24}
                      className={
                        formData.serviceType === service.id
                          ? "text-white"
                          : "text-[#C0C0C0]"
                      }
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-[#EAEAEA]">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[#3461D2] font-bold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#A0A0A0] mb-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#666]">
                      <Clock size={12} />
                      <span>{service.sla}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {errors.serviceType && (
              <p className="text-sm text-[#D23434]">{errors.serviceType}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-2xl font-bold text-[#EAEAEA] mb-2">
                Contact Information
              </h2>
              <p className="text-[#A0A0A0]">
                How should we reach you with the diagnosis?
              </p>
            </div>

            <div className="space-y-4">
              <Input
                id="name"
                label="Full Name"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                error={errors.name}
              />

              <Input
                id="email"
                type="email"
                label="Email Address"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                error={errors.email}
              />

              <Input
                id="phone"
                type="tel"
                label="Phone Number (Optional)"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-2xl font-bold text-[#EAEAEA] mb-2">
                Vehicle Information
              </h2>
              <p className="text-[#A0A0A0]">
                Tell us about your Porsche
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                id="year"
                label="Year"
                placeholder="Select year"
                options={years}
                value={formData.vehicleYear}
                onChange={(e) => updateFormData("vehicleYear", e.target.value)}
                error={errors.vehicleYear}
              />

              <Select
                id="model"
                label="Model"
                placeholder="Select model"
                options={models}
                value={formData.vehicleModel}
                onChange={(e) => updateFormData("vehicleModel", e.target.value)}
                error={errors.vehicleModel}
              />
            </div>

            <Input
              id="vin"
              label="VIN (Optional but recommended)"
              placeholder="WP0AB2A99KS123456"
              value={formData.vehicleVin}
              onChange={(e) =>
                updateFormData("vehicleVin", e.target.value.toUpperCase())
              }
              maxLength={17}
            />

            <p className="text-xs text-[#666]">
              The VIN helps identify your exact vehicle configuration and any
              applicable Technical Service Bulletins (TSBs).
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-mono text-2xl font-bold text-[#EAEAEA] mb-2">
                Describe the Issue
              </h2>
              <p className="text-[#A0A0A0]">
                The more detail you provide, the better we can help
              </p>
            </div>

            <Textarea
              id="symptoms"
              label="What are the symptoms?"
              placeholder="Describe what you're experiencing. When does it happen? Any specific conditions (cold start, highway speeds, turning, etc.)?"
              rows={5}
              value={formData.symptoms}
              onChange={(e) => updateFormData("symptoms", e.target.value)}
              error={errors.symptoms}
            />

            <Input
              id="codes"
              label="Error Codes (if any)"
              placeholder="P0171, P0300, etc."
              value={formData.errorCodes}
              onChange={(e) => updateFormData("errorCodes", e.target.value)}
            />

            <FileUpload
              label="Upload Audio/Video/Images (Optional)"
              onFilesChange={(files) => updateFormData("files", files)}
              maxFiles={5}
              maxSizeMB={50}
            />

            <p className="text-xs text-[#666]">
              Audio recordings of noises and video of the issue are extremely
              helpful for accurate diagnosis.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  currentStep >= step.id
                    ? "border-[#3461D2] bg-[#3461D2] text-white"
                    : "border-[#2A2A2E] bg-[#1A1A1E] text-[#666]"
                }`}
              >
                {currentStep > step.id ? (
                  <Check size={18} />
                ) : (
                  <step.icon size={18} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-24 h-0.5 mx-2 ${
                    currentStep > step.id ? "bg-[#3461D2]" : "bg-[#2A2A2E]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step) => (
            <span
              key={step.id}
              className={`text-xs ${
                currentStep >= step.id ? "text-[#EAEAEA]" : "text-[#666]"
              }`}
            >
              {step.title}
            </span>
          ))}
        </div>
      </div>

      {/* SLA Banner */}
      {formData.serviceType === "email" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#34D275]/10 border border-[#34D275]/30 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-[#34D275]" />
            <div>
              <p className="text-sm font-medium text-[#EAEAEA]">
                {slaMessage}
              </p>
              <p className="text-xs text-[#A0A0A0]">
                Business hours: 8:00 AM - 4:00 PM PST
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Form Content */}
      <div className="bg-[#1A1A1E] border border-[#2A2A2E] rounded-lg p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-[#2A2A2E]">
          {currentStep > 1 ? (
            <Button variant="ghost" onClick={prevStep}>
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <Button variant="primary" onClick={nextStep}>
              Continue
              <ArrowRight size={16} className="ml-2" />
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit}>
              Proceed to Payment
              <ArrowRight size={16} className="ml-2" />
            </Button>
          )}
        </div>
      </div>

      {/* Summary Card */}
      {formData.serviceType && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-[#0F1115] border border-[#2A2A2E] rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="accent">
                {services.find((s) => s.id === formData.serviceType)?.title}
              </Badge>
              {formData.vehicleYear && formData.vehicleModel && (
                <span className="text-sm text-[#A0A0A0]">
                  {formData.vehicleYear} {formData.vehicleModel}
                </span>
              )}
            </div>
            <span className="font-mono font-bold text-[#EAEAEA]">
              {services.find((s) => s.id === formData.serviceType)?.price}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
