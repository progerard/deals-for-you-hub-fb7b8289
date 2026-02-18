import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ContactCTA from "@/components/ContactCTA";
import LegalModals from "@/components/LegalModals";

import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Hero />
      </header>
      <main>
        <Products />
        <Testimonials />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
      <LegalModals />
    </div>
  );
};

export default Index;
