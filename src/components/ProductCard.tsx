import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  lifetime?: boolean;
  annual?: boolean;
  index?: number;
}

const ProductCard = ({ name, price, features, popular, lifetime, annual, index = 0 }: ProductCardProps) => {
  return (
    <motion.div 
      className="card-product group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
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
          {annual && <span className="text-sm text-muted-foreground">/año</span>}
        </div>
      </div>

      <ul className="space-y-3">
        {features.map((feature, featureIndex) => (
          <motion.li 
            key={featureIndex} 
            className="flex items-start gap-3 text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.3, 
              delay: (index * 0.1) + (featureIndex * 0.05) + 0.2
            }}
          >
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductCard;
