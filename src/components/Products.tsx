import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const chatgptProducts = [
  {
    id: "chatgpt-go",
    name: "ChatGPT Go",
    price: 40,
    annual: true,
    features: [
      "Acceso completo a GPT-4",
      "Límites generosos de uso",
      "Ideal para uso personal",
      "Soporte incluido"
    ],
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    price: 70,
    popular: true,
    annual: true,
    features: [
      "Acceso a GPT-4 y GPT-4o",
      "Generación de imágenes DALL-E",
      "Navegación web en tiempo real",
      "Plugins y GPTs personalizados"
    ],
  },
  {
    id: "chatgpt-pro-business",
    name: "ChatGPT Pro Business",
    price: 89,
    annual: true,
    features: [
      "Acceso a GPT-4 y GPT-4o",
      "Generación de imágenes DALL-E",
      "Navegación web en tiempo real",
      "Plugins y GPTs personalizados"
    ],
  },
  {
    id: "chatgpt-teacher",
    name: "ChatGPT Teacher",
    price: 80,
    features: [
      "Vigencia de 18 meses",
      "Acceso completo a GPT-4",
      "Herramientas educativas avanzadas",
      "Soporte incluido"
    ],
    duration: "18 meses",
  }
];

const perplexityProducts = [
  {
    id: "perplexity-pro",
    name: "Perplexity Pro",
    price: 24,
    annual: true,
    features: [
      "Sonar, Gemini 3 Flash/Pro, GPT-5.2",
      "Claude Sonnet 4.5, Grok 4.1, Kimi K2.5",
      "Búsquedas ilimitadas con IA",
      "Respuestas con fuentes verificadas"
    ],
  }
];

const canvaProducts = [
  {
    id: "canva-pro-edu",
    name: "Canva Pro Edu",
    price: 10,
    lifetime: true,
    features: [
      "Licencia para siempre",
      "Millones de plantillas premium",
      "Herramientas de diseño avanzadas",
      "Almacenamiento ilimitado"
    ],
  },
  {
    id: "kit-marca",
    name: "Kit de Marca",
    price: 40,
    lifetime: true,
    features: [
      "Configuración en tu propia cuenta",
      "Personalización completa",
      "Colores y fuentes de marca",
      "Gestión de activos de marca"
    ],
  }
];

const autodeskProducts = [
  {
    id: "autodesk-1y",
    name: "Autodesk All Apps 1 Año",
    price: 15,
    annual: true,
    features: [
      "Acceso a todas las apps de Autodesk",
      "AutoCAD, Revit, 3ds Max y más",
      "Actualizaciones incluidas",
      "Licencia educativa verificada"
    ],
  },
  {
    id: "autodesk-2y",
    name: "Autodesk All Apps 2 Años",
    price: 27,
    features: [
      "Acceso a todas las apps de Autodesk",
      "AutoCAD, Revit, 3ds Max y más",
      "Actualizaciones incluidas",
      "Licencia educativa verificada"
    ],
    duration: "2 años",
  },
  {
    id: "autodesk-3y",
    name: "Autodesk All Apps 3 Años",
    price: 40,
    popular: true,
    features: [
      "Acceso a todas las apps de Autodesk",
      "AutoCAD, Revit, 3ds Max y más",
      "Actualizaciones incluidas",
      "Mejor relación calidad-precio"
    ],
    duration: "3 años",
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

const Products = () => {
  return (
    <section id="productos" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* ChatGPT Section */}
        <div className="mb-32">
          <SectionHeader 
            title="Planes ChatGPT" 
            subtitle="Elige el plan que mejor se adapte a tus necesidades de inteligencia artificial"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {chatgptProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>

        {/* Perplexity Section */}
        <div className="mb-32">
          <SectionHeader 
            title="Perplexity Pro" 
            subtitle="El buscador con inteligencia artificial más avanzado del mercado"
          />
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {perplexityProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>

        {/* Canva Section */}
        <div className="mb-32">
          <SectionHeader 
            title="Canva Pro" 
            subtitle="Herramientas de diseño profesional a tu alcance"
            gradient="accent"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {canvaProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>

        {/* Autodesk Section */}
        <div>
          <SectionHeader 
            title="Autodesk All Apps" 
            subtitle="Todas las herramientas de diseño y arquitectura profesional"
            gradient="accent"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {autodeskProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
