import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPreview = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog</span>
          </div>
          <h2 className="section-title mb-6">
            <span className="text-gradient">Últimos artículos</span>
          </h2>
          <p className="section-subtitle">
            Guías y comparativas para sacarle el máximo partido a tus herramientas premium
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block card-product group p-6 h-full hover:border-primary/40"
              >
                <div className="flex flex-col h-full">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-primary font-medium">
                      Leer <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/30 border border-transparent transition-all duration-300 hover:-translate-y-1"
          >
            Ver todos los artículos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
