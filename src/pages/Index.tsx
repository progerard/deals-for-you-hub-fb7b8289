import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/WhatsAppButton";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <FAQ />
      <Footer />
      <FloatingButtons />
      <Cart />
    </div>
  );
};

export default Index;
