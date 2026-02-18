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
      className={`card-product group flex flex-col ${popular ? 'card-product-popular' : ''}`}
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
      <div className="relative z-10 flex flex-col h-full">
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
        <ul className="space-y-4 inline-block text-left flex-1">
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

        {/* Contact Buttons */}
        <div className="mt-8 pt-6 border-t border-border/50 flex gap-3">
          <motion.a
            href={`https://wa.me/34640329880?text=${encodeURIComponent(`Hola! Me interesa ${name} por ${price} euros`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${popular
              ? 'bg-[#25D366] text-white hover:bg-[#1fb855]'
              : 'bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25'
              }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.584-.818-6.332-2.189l-.144-.113-3.012 1.01 1.01-3.012-.113-.144A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            WhatsApp
          </motion.a>
          <motion.a
            href="https://t.me/Gerardo22"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${popular
              ? 'bg-[#2AABEE] text-white hover:bg-[#229ED9]'
              : 'bg-[#2AABEE]/15 text-[#2AABEE] hover:bg-[#2AABEE]/25'
              }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Telegram
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
