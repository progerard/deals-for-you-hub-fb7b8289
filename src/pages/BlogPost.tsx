import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");
  const { t, language } = useTranslation();
  const locale = language === "es" ? "es-ES" : "en-US";

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">{t("blog.notFound")}</h1>
          <Link to="/blog" className="text-primary hover:underline">{t("blog.backBlog")}</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - venderfc Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://venderfc.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://venderfc.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "author": { "@type": "Organization", "name": "venderfc" },
            "publisher": { "@type": "Organization", "name": "venderfc", "url": "https://venderfc.com" },
            "keywords": post.keywords.join(", "),
            "mainEntityOfPage": `https://venderfc.com/blog/${post.slug}`
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <article className="pt-12 pb-24 px-4">
          <div className="container max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              {t("blog.backBlog")}
            </Link>

            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">{post.category}</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} {t("blog.readTime")}
                </span>
              </div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-gradient
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-li:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-table:border-border prose-th:text-foreground prose-td:text-muted-foreground
                prose-th:border-border prose-td:border-border prose-th:p-3 prose-td:p-3"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{t("blog.ctaTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("blog.ctaDesc")}</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://wa.me/34640329880" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors">WhatsApp</a>
                <a href="https://t.me/Gerardo22" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#2AABEE] text-white hover:bg-[#229ED9] transition-colors">Telegram</a>
              </div>
            </motion.div>

            <div className="mt-16">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">{t("blog.relatedPosts")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogPosts.filter(p => p.slug !== post.slug).slice(0, 4).map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}
                    className="flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 transition-all duration-300 group">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{relatedPost.category}</span>
                      <h4 className="font-display text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors leading-snug">{relatedPost.title}</h4>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/#productos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {t("blog.backProducts")}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^-+$/))) return '</thead><tbody>';
      const tag = 'td';
      return '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    })
    .replace(/<tr>(.+?)<\/tr>\n<\/thead><tbody>/g, '<table><thead><tr>$1</tr></thead><tbody>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(?!<[hultd])((?!^\s*$).+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/\n{2,}/g, '\n');
}

export default BlogPost;
