import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

interface ProductCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  lifetime?: boolean;
  delay?: number;
}

const ProductCard = ({ name, price, features, popular, lifetime, delay = 0 }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="card-product group"
        style={{ animationDelay: `${delay}ms` }}
      >
        {popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className="bg-gradient-primary px-4 py-1 rounded-b-lg">
              <span className="text-xs font-semibold text-primary-foreground flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Popular
              </span>
            </div>
          </div>
        )}
        
        {lifetime && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className="px-4 py-1 rounded-b-lg" style={{ background: 'linear-gradient(135deg, hsl(280 80% 60%) 0%, hsl(320 80% 55%) 100%)' }}>
              <span className="text-xs font-semibold text-white">Para siempre</span>
            </div>
          </div>
        )}

        <div className="mb-6 pt-2">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">{name}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gradient">{price}€</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary w-full text-center"
        >
          Comprar ahora
        </button>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
        productPrice={price}
      />
    </>
  );
};

export default ProductCard;
