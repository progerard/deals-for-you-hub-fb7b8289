import { MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(142 70% 50% / 0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{t("contact.badge")}</span>
          </motion.div>

          <h2 className="section-title mb-6">
            {t("contact.title.1")}{' '}
            <span className="text-gradient">{t("contact.title.2")}</span>?
          </h2>
          
          <p className="section-subtitle mb-12">{t("contact.subtitle")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.a
              href={`https://wa.me/34640329880?text=${encodeURIComponent(t("wa.generalMsg"))}`}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)' }}
              whileHover={{ boxShadow: '0 12px 40px rgba(37, 211, 102, 0.5)', y: -3 }}>
              <MessageCircle className="h-6 w-6" />
              {t("contact.whatsapp")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a
              href="https://t.me/Gerardo22" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)', boxShadow: '0 8px 30px rgba(0, 136, 204, 0.35)' }}
              whileHover={{ boxShadow: '0 12px 40px rgba(0, 136, 204, 0.5)', y: -3 }}>
              <Send className="h-6 w-6" />
              {t("contact.telegram")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
