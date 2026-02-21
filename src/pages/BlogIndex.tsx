import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n/LanguageContext";

const BlogIndex = () => {
  const { t, language } = useTranslation();
  const locale = language === "es" ? "es-ES" : "en-US";

  return (
    <>
      <Helmet>
        <title>{t("blog.pageTitle")}</title>
        <meta name="description" content={t("blog.pageDesc")} />
        <link rel="canonical" href="https://venderfc.com/blog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="pt-12 pb-8 px-4">
          <div className="container max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              {t("blog.backHome")}
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="section-title mb-4">
                <span className="text-gradient">{t("blog.badge")}</span>
              </h1>
              <p className="section-subtitle">{t("blog.fullSubtitle")}</p>
            </motion.div>
          </div>
        </div>

        <div className="px-4 pb-24">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article key={post.slug}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link to={`/blog/${post.slug}`} className="block card-product group p-6 h-full hover:border-primary/40">
                    <div className="flex flex-col h-full">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{post.category}</span>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-medium">
                          {t("blog.readMore")} <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
