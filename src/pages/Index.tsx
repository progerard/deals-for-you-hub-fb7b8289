import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <ContactCTA />
      <FAQ />
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
};

export default Index;
