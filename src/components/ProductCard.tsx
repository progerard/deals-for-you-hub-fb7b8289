import { Check, Sparkles, Crown, ShoppingCart } from "lucide-react";
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
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Popular badge */}
      {popular && (
        <motion.div
          className="absolute -top-px left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-primary px-6 py-2 rounded-b-xl shadow-glow">
            <span className="text-xs font-bold text-primary-foreground flex items-center gap-1.5 uppercase tracking-wider">
              <Crown className="h-3.5 w-3.5" />
              Más Popular
            </span>
          </div>
        </motion.div>
      )}

      {/* Lifetime badge */}
      {lifetime && (
        <motion.div
          className="absolute -top-px left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-accent px-6 py-2 rounded-b-xl shadow-glow-accent">
            <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Para siempre
            </span>
          </div>
        </motion.div>
      )}

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-10" />

      {/* Card content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 pt-4 text-center">
          <motion.h3 
            className="font-display text-2xl font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.2 }}
          >
            {name}
          </motion.h3>
          <motion.div 
            className="flex items-baseline gap-2 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.25, type: "spring", stiffness: 150 }}
          >
            <span className="text-5xl font-extrabold text-gradient">{price}€</span>
            {annual && <span className="text-base text-muted-foreground font-medium">/año</span>}
            {duration && <span className="text-base text-muted-foreground font-medium">/{duration}</span>}
          </motion.div>
        </div>

        {/* Divider with glow */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Features */}
        <ul className="space-y-4 inline-block text-left">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: (index * 0.12) + (featureIndex * 0.08) + 0.35
              }}
            >
              <motion.div 
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Check className="h-3.5 w-3.5 text-primary" />
              </motion.div>
              <span className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Buy Button */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <motion.a
            href={`https://wa.me/34640329880?text=${encodeURIComponent(`Hola! Me interesa comprar ${name} por ${price} euros`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${popular
              ? 'bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/30 border border-transparent'
              }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingCart className="h-5 w-5" />
            Comprar ahora
          </motion.a>
        </div>
      </div>

      {/* Corner accent glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;
