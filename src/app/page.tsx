import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ExpertBio } from "@/components/sections/ExpertBio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";
import { ExitIntentModal } from "@/components/sections/ExitIntentModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ExpertBio />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <ExitIntentModal />
    </>
  );
}
