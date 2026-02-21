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
import { useTranslation } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("seo.home.title")}</title>
        <meta name="description" content={t("seo.home.description")} />
        <link rel="canonical" href="https://venderfc.com/" />
      </Helmet>
      <header>
        <nav className="sr-only" aria-label="Enlaces principales">
          <Link to="/blog">Blog</Link>
          <a href="#productos">{t("hero.cta.products")}</a>
          <a href="#faq">{t("hero.cta.faq")}</a>
          <a href="#contacto">{t("contact.whatsapp")}</a>
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
