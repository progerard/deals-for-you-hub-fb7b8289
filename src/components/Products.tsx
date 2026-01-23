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
    delay: 0
  },
  {
    id: "chatgpt-teacher",
    name: "ChatGPT Teacher",
    price: 60,
    annual: true,
    features: [
      "Perfecto para educadores",
      "Funciones avanzadas de enseñanza",
      "Herramientas pedagógicas",
      "Soporte prioritario"
    ],
    delay: 100
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
    delay: 200
  },
  {
    id: "chatgpt-pro",
    name: "ChatGPT Pro",
    price: 89,
    annual: true,
    features: [
      "Todo lo de Plus incluido",
      "Modo Pro con o1 ilimitado",
      "Máxima capacidad de cómputo",
      "Ideal para profesionales"
    ],
    delay: 300
  }
];

const perplexityProducts = [
  {
    id: "perplexity-pro",
    name: "Perplexity Pro",
    price: 23,
    annual: true,
    features: [
      "Suscripción de 1 año completo",
      "Búsquedas ilimitadas con IA",
      "Acceso a GPT-4 y Claude",
      "Respuestas con fuentes verificadas"
    ],
    delay: 0
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
    delay: 0
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
    delay: 100
  }
];

const Products = () => {
  return (
    <section id="productos" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* ChatGPT Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Planes <span className="text-gradient">ChatGPT</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatgptProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>

        {/* Perplexity Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Perplexity Pro</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              El buscador con inteligencia artificial más avanzado
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            {perplexityProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>

        {/* Canva Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient-accent">Canva Pro</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Herramientas de diseño profesional a tu alcance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {canvaProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
