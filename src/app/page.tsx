import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ExpertBio } from "@/components/sections/ExpertBio";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Footer } from "@/components/sections/Footer";
import { ExitIntentModal } from "@/components/sections/ExitIntentModal";
import { MobileStickyBar } from "@/components/sections/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <ExpertBio />
        <Testimonials />
        <LeadMagnet />
      </main>
      <Footer />
      <ExitIntentModal />
      <MobileStickyBar />
    </>
  );
}
