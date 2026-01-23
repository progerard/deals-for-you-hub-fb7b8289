import ProductCard from "./ProductCard";

const chatgptProducts = [
  {
    name: "ChatGPT Go",
    price: 40,
    features: [
      "Acceso completo a GPT-4",
      "Límites generosos de uso",
      "Ideal para uso personal",
      "Soporte incluido"
    ],
    delay: 0
  },
  {
    name: "ChatGPT Teacher",
    price: 60,
    features: [
      "Perfecto para educadores",
      "Funciones avanzadas de enseñanza",
      "Herramientas pedagógicas",
      "Soporte prioritario"
    ],
    delay: 100
  },
  {
    name: "ChatGPT Plus",
    price: 70,
    popular: true,
    features: [
      "Acceso a GPT-4 y GPT-4o",
      "Generación de imágenes DALL-E",
      "Navegación web en tiempo real",
      "Plugins y GPTs personalizados"
    ],
    delay: 200
  },
  {
    name: "ChatGPT Pro",
    price: 89,
    features: [
      "Todo lo de Plus incluido",
      "Modo Pro con o1 ilimitado",
      "Máxima capacidad de cómputo",
      "Ideal para profesionales"
    ],
    delay: 300
  }
];

const canvaProducts = [
  {
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
    name: "Kit de Marca",
    price: 40,
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
            {chatgptProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
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
            {canvaProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
