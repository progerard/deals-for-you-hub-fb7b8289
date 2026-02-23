import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const navSections = [
  { key: "iks", href: "#iks" },
  { key: "garajes", href: "#garajes" },
  { key: "chatgpt", href: "#chatgpt" },
  { key: "perplexity", href: "#perplexity" },
  { key: "spotify", href: "#spotify" },
  { key: "gemini", href: "#gemini" },
  { key: "canva", href: "#canva" },
  { key: "youtube", href: "#youtube" },
  { key: "autodesk", href: "#autodesk" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-14">
        <Link to="/" className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors">
          venderfc
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.key}
              onClick={() => handleClick(s.href)}
              className="px-4 py-2 text-base font-semibold text-foreground hover:text-primary transition-all duration-200 rounded-xl hover:bg-primary/10 hover:shadow-md"
            >
              {t(`nav.${s.key}`)}
            </button>
          ))}
          <Link
            to="/blog"
            className="px-4 py-2 text-base font-semibold text-foreground hover:text-primary transition-all duration-200 rounded-xl hover:bg-primary/10 hover:shadow-md"
          >
            Blog
          </Link>
          <a href="#faq" onClick={() => handleClick("#faq")}
            className="px-4 py-2 text-base font-semibold text-foreground hover:text-primary transition-all duration-200 rounded-xl hover:bg-primary/10 hover:shadow-md"
          >
            FAQ
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navSections.map((s) => (
                <button
                  key={s.key}
                  onClick={() => handleClick(s.href)}
                  className="text-left px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
                >
                  {t(`nav.${s.key}`)}
                </button>
              ))}
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              >
                Blog
              </Link>
              <button
                onClick={() => handleClick("#faq")}
                className="text-left px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              >
                FAQ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
