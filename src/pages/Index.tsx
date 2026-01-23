import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
