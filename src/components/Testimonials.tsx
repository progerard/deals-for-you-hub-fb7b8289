import { Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { id: 1, name: "Carlos M.", role: t("testimonial.1.role"), content: t("testimonial.1.content"), rating: 5, product: "Canva Pro" },
    { id: 2, name: "Laura G.", role: t("testimonial.2.role"), content: t("testimonial.2.content"), rating: 5, product: "ChatGPT Plus" },
    { id: 3, name: "David R.", role: t("testimonial.3.role"), content: t("testimonial.3.content"), rating: 5, product: "Autodesk All Apps" },
    { id: 4, name: "Ana P.", role: t("testimonial.4.role"), content: t("testimonial.4.content"), rating: 5, product: "Spotify Premium" },
  ];

  return (
    <section className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            {t("testimonials.title.1")} <span className="text-gradient">{t("testimonials.title.2")}</span>
          </h2>
          <p className="section-subtitle">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}
              className="bg-background/60 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mb-6 flex-1">
                <p className="text-muted-foreground italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
