import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ContactCTA from "@/components/ContactCTA";
import LegalModals from "@/components/LegalModals";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>venderfc - Cuentas Premium al Mejor Precio</title>
        <meta name="description" content="Compra ChatGPT Plus, Canva Pro, Spotify Premium y más a precios increíbles. Entrega inmediata, soporte 24/7 y garantía." />
        <link rel="canonical" href="https://venderfc.com/" />
      </Helmet>
      <header>
        <nav className="sr-only" aria-label="Enlaces principales">
          <Link to="/blog">Blog</Link>
          <a href="#productos">Productos</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <Hero />
      </header>
      <main>
        <Products />
        <Testimonials />
        <BlogPreview />
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
