import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
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
      <Navbar />
      <header>
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
