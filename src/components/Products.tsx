import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductBlogLinks from "./ProductBlogLinks";
import { useTranslation } from "@/i18n/LanguageContext";

const Products = () => {
  const { t } = useTranslation();

  const chatgptProducts = [
    {
      id: "chatgpt-go",
      name: "ChatGPT Go",
      price: 40,
      annual: true,
      features: [t("feature.chatgpt.go.1"), t("feature.chatgpt.go.2"), t("feature.chatgpt.go.3"), t("feature.chatgpt.go.4")],
    },
    {
      id: "chatgpt-plus",
      name: "ChatGPT Plus",
      price: 70,
      popular: true,
      annual: true,
      features: [t("feature.chatgpt.plus.1"), t("feature.chatgpt.plus.2"), t("feature.chatgpt.plus.3"), t("feature.chatgpt.plus.4")],
    },
    {
      id: "chatgpt-pro-business",
      name: "ChatGPT Pro Business",
      price: 89,
      annual: true,
      features: [t("feature.chatgpt.pro.1"), t("feature.chatgpt.pro.2"), t("feature.chatgpt.pro.3"), t("feature.chatgpt.pro.4")],
    },
    {
      id: "chatgpt-teacher",
      name: "ChatGPT Teacher",
      price: 70,
      features: [t("feature.chatgpt.teacher.1"), t("feature.chatgpt.teacher.2"), t("feature.chatgpt.teacher.3"), t("feature.chatgpt.teacher.4")],
      duration: t("duration.18months"),
    }
  ];

  const perplexityProducts = [
    {
      id: "perplexity-pro",
      name: "Perplexity Pro",
      price: 24,
      annual: true,
      features: [t("feature.perplexity.1"), t("feature.perplexity.2"), t("feature.perplexity.3"), t("feature.perplexity.4")],
    }
  ];

  const spotifyProducts = [
    {
      id: "spotify-premium",
      name: "Spotify Premium",
      price: 60,
      annual: true,
      features: [t("feature.spotify.1"), t("feature.spotify.2"), t("feature.spotify.3"), t("feature.spotify.4")],
    }
  ];

  const youtubeProducts = [
    {
      id: "youtube-premium",
      name: "YouTube Premium",
      price: 60,
      annual: true,
      features: [t("feature.youtube.1"), t("feature.youtube.2"), t("feature.youtube.3"), t("feature.youtube.4")],
    }
  ];

  const geminiProducts = [
    {
      id: "gemini-ia-2tb",
      name: "Gemini IA 2TB",
      price: 10,
      annual: true,
      features: [t("feature.gemini.1"), t("feature.gemini.2"), t("feature.gemini.3"), t("feature.gemini.4")],
    }
  ];

  const canvaProducts = [
    {
      id: "canva-pro-edu",
      name: "Canva Pro Edu",
      price: 10,
      lifetime: true,
      features: [t("feature.canva.pro.1"), t("feature.canva.pro.2"), t("feature.canva.pro.3"), t("feature.canva.pro.4")],
    },
    {
      id: "kit-marca",
      name: "Kit de Marca",
      price: 40,
      lifetime: true,
      features: [t("feature.canva.kit.1"), t("feature.canva.kit.2"), t("feature.canva.kit.3"), t("feature.canva.kit.4")],
    }
  ];

  const autodeskProducts = [
    {
      id: "autodesk-1y",
      name: "Autodesk All Apps",
      price: 15,
      annual: true,
      features: [t("feature.autodesk.1"), t("feature.autodesk.2"), t("feature.autodesk.3"), t("feature.autodesk.4.standard")],
    },
    {
      id: "autodesk-2y",
      name: "Autodesk All Apps",
      price: 27,
      features: [t("feature.autodesk.1"), t("feature.autodesk.2"), t("feature.autodesk.3"), t("feature.autodesk.4.standard")],
      duration: t("duration.2years"),
    },
    {
      id: "autodesk-3y",
      name: "Autodesk All Apps",
      price: 40,
      popular: true,
      features: [t("feature.autodesk.1"), t("feature.autodesk.2"), t("feature.autodesk.3"), t("feature.autodesk.4.best")],
      duration: t("duration.3years"),
    }
  ];

  const SectionHeader = ({ title, subtitle, gradient = "primary" }: { title: string; subtitle: string; gradient?: "primary" | "accent" }) => (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title mb-6">
        <span className={gradient === "primary" ? "text-gradient" : "text-gradient-accent"}>{title}</span>
      </h2>
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  );

  return (
    <section id="productos" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <SectionHeader title={t("products.chatgpt.title")} subtitle={t("products.chatgpt.subtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {chatgptProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="chatgpt" />
        </div>

        <div className="mb-32">
          <SectionHeader title={t("products.perplexity.title")} subtitle={t("products.perplexity.subtitle")} />
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {perplexityProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="perplexity" />
        </div>

        <div className="mb-32">
          <SectionHeader title={t("products.spotify.title")} subtitle={t("products.spotify.subtitle")} />
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {spotifyProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="spotify" />
        </div>

        <div className="mb-32">
          <SectionHeader title={t("products.gemini.title")} subtitle={t("products.gemini.subtitle")} />
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {geminiProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="gemini" />
        </div>

        <div className="mb-32">
          <SectionHeader title={t("products.canva.title")} subtitle={t("products.canva.subtitle")} gradient="accent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {canvaProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="canva" />
        </div>

        <div className="mb-32">
          <SectionHeader title={t("products.youtube.title")} subtitle={t("products.youtube.subtitle")} />
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {youtubeProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="youtube" />
        </div>

        <div>
          <SectionHeader title={t("products.autodesk.title")} subtitle={t("products.autodesk.subtitle")} gradient="accent" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {autodeskProducts.map((product, index) => (<ProductCard key={product.id} {...product} index={index} />))}
          </div>
          <ProductBlogLinks section="autodesk" />
        </div>
      </div>
    </section>
  );
};

export default Products;
