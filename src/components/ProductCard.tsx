import { Check, Sparkles, Crown } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  lifetime?: boolean;
  annual?: boolean;
  duration?: string;
  index?: number;
}

const ProductCard = ({ name, price, features, popular, lifetime, annual, duration, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      className={`card-product group ${popular ? 'card-product-popular' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {/* Popular badge */}
      {popular && (
        <motion.div
          className="absolute -top-px left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="bg-gradient-primary px-5 py-1.5 rounded-b-xl shadow-glow">
            <span className="text-xs font-bold text-primary-foreground flex items-center gap-1.5 uppercase tracking-wide">
              <Crown className="h-3.5 w-3.5" />
              Más Popular
            </span>
          </div>
        </motion.div>
      )}

      {/* Lifetime badge */}
      {lifetime && (
        <motion.div
          className="absolute -top-px left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="bg-gradient-accent px-5 py-1.5 rounded-b-xl shadow-glow-accent">
            <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              Para siempre
            </span>
          </div>
        </motion.div>
      )}

      {/* Card content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 pt-4 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">{name}</h3>
          <div className="flex items-baseline gap-2 justify-center">
            <span className="text-5xl font-extrabold text-gradient">{price}€</span>
            {annual && <span className="text-base text-muted-foreground font-medium">/año</span>}
            {duration && <span className="text-base text-muted-foreground font-medium">/{duration}</span>}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Features */}
        <ul className="space-y-4 inline-block text-left">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: (index * 0.1) + (featureIndex * 0.08) + 0.3
              }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-muted-foreground text-base leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Buy Button */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <a
            href={`https://wa.me/34640329880?text=${encodeURIComponent(`Hola! Me interesa comprar ${name} por ${price}€`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${popular
              ? 'bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-1'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-1'
              }`}
          >
            Comprar ahora
          </a>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 60px hsl(142 70% 50% / 0.05)' }} />
    </motion.div>
  );
};

export default ProductCard;
