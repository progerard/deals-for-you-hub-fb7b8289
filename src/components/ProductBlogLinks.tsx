import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface RelatedBlogLinkProps {
  slug: string;
  title: string;
  index?: number;
}

const RelatedBlogLink = ({ slug, title, index = 0 }: RelatedBlogLinkProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Link
      to={`/blog/${slug}`}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
    >
      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      {title}
    </Link>
  </motion.div>
);

// Map product sections to related blog posts
export const productBlogLinks: Record<string, { slug: string; title: string }[]> = {
  chatgpt: [
    { slug: "chatgpt-plus-vs-gratuito-diferencias", title: "ChatGPT Plus vs Gratuito: ¿Merece la pena?" },
    { slug: "mejores-herramientas-ia-2026", title: "Las 5 mejores herramientas de IA en 2026" },
  ],
  perplexity: [
    { slug: "perplexity-pro-mejor-buscador-ia", title: "Perplexity Pro: El buscador que reemplaza a Google" },
    { slug: "mejores-herramientas-ia-2026", title: "Las 5 mejores herramientas de IA en 2026" },
  ],
  spotify: [
    { slug: "spotify-premium-gratis-legal-2026", title: "Spotify Premium barato y legal en 2026" },
  ],
  youtube: [
    { slug: "youtube-premium-merece-la-pena", title: "YouTube Premium: ¿Merece la pena en 2026?" },
  ],
  canva: [
    { slug: "canva-pro-guia-completa", title: "Canva Pro: Guía completa para diseñar como un profesional" },
  ],
  gemini: [
    { slug: "mejores-herramientas-ia-2026", title: "Las 5 mejores herramientas de IA en 2026" },
  ],
  autodesk: [
    { slug: "mejores-herramientas-ia-2026", title: "Las 5 mejores herramientas de IA en 2026" },
  ],
};

interface ProductBlogLinksProps {
  section: string;
}

const ProductBlogLinks = ({ section }: ProductBlogLinksProps) => {
  const links = productBlogLinks[section];
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      <span className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium">Artículos relacionados:</span>
      {links.map((link, i) => (
        <RelatedBlogLink key={link.slug} {...link} index={i} />
      ))}
    </div>
  );
};

export default ProductBlogLinks;
