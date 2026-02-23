import { Sparkles, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-hero">
      {/* Subtle background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(142 70% 50% / 0.12) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{t("hero.badge")}</span>
          </motion.div>

          {/* Main heading - smaller */}
          <motion.h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-[1.15] tracking-tight"
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("hero.title.access")}{' '}
            <span className="text-gradient">ChatGPT</span>
            {', '}
            <span className="text-gradient-accent">Canva</span>
            {', '}
            <span className="text-gradient">Spotify</span>
            {' & '}
            <span className="text-gradient-accent">YouTube</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {t("hero.description")}{' '}
            <span className="text-foreground font-medium">{t("hero.description.highlight")}</span>
            {t("hero.description.end")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#productos" className="btn-primary gap-2 text-base group">
              <Zap className="h-4 w-4 transition-transform group-hover:scale-110" />
              {t("hero.cta.products")}
            </a>
            <a href="#faq" className="btn-secondary gap-2 text-base">
              {t("hero.cta.faq")}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{t("hero.trust.secure")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{t("hero.trust.instant")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{t("hero.trust.warranty")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
