import { MessageCircle, Shield, Clock, Headphones, Send, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  const trustBadges = [
    { icon: Shield, title: t("footer.trust.secure"), subtitle: t("footer.trust.secure.sub") },
    { icon: Clock, title: t("footer.trust.instant"), subtitle: t("footer.trust.instant.sub") },
    { icon: Headphones, title: t("footer.trust.support"), subtitle: t("footer.trust.support.sub") },
  ];

  const contactLinks = [
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/34640329880", gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", shadow: "rgba(37, 211, 102, 0.35)" },
    { icon: Send, label: "Telegram", href: "https://t.me/Gerardo22", gradient: "linear-gradient(135deg, #0088cc 0%, #006699 100%)", shadow: "rgba(0, 136, 204, 0.35)" },
    { icon: Users, label: "Forocoches", href: "https://www.forocoches.com/foro/private.php?do=newpm&u=Gerardo22", gradient: "linear-gradient(135deg, #ff6600 0%, #cc5200 100%)", shadow: "rgba(255, 102, 0, 0.35)" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30 pt-20 pb-10 px-4 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {trustBadges.map((badge, index) => (
            <motion.div key={index} className="flex items-center gap-5 justify-center md:justify-start glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <div className="p-4 rounded-xl bg-primary/15 border border-primary/20">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">{badge.title}</h4>
                <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center py-12 px-8 rounded-3xl glass mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("footer.contact.badge")}</span>
          </div>
          <h3 className="font-display text-3xl font-bold mb-4">{t("footer.contact.title")}</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t("footer.contact.subtitle")}</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link, index) => (
              <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300"
                style={{ background: link.gradient, boxShadow: `0 4px 20px ${link.shadow}` }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 8px 30px ${link.shadow}` }}>
                <link.icon className="h-5 w-5" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{t("blog.badge")}</a>
          <span className="text-muted-foreground/50">•</span>
          <button onClick={() => document.getElementById("privacy-modal")?.classList.remove("hidden")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{t("footer.privacy")}</button>
          <span className="text-muted-foreground/50">•</span>
          <button onClick={() => document.getElementById("legal-modal")?.classList.remove("hidden")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{t("footer.legal")}</button>
          <span className="text-muted-foreground/50">•</span>
          <button onClick={() => document.getElementById("terms-modal")?.classList.remove("hidden")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{t("footer.terms")}</button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
