import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    role: "Diseñador Gráfico",
    content: "Llevo 3 meses usando la cuenta de Canva Pro y funciona perfecta. Me he ahorrado mucho dinero y el soporte es muy rápido.",
    rating: 5,
    product: "Canva Pro"
  },
  {
    id: 2,
    name: "Laura G.",
    role: "Estudiante",
    content: "Compré ChatGPT Plus para ayudarme con la tesis y la entrega fue inmediata. 100% recomendado.",
    rating: 5,
    product: "ChatGPT Plus"
  },
  {
    id: 3,
    name: "David R.",
    role: "Arquitecto",
    content: "Las licencias de Autodesk funcionan sin problemas. Tuve una duda al principio y me la resolvieron en minutos por WhatsApp.",
    rating: 5,
    product: "Autodesk All Apps"
  },
  {
    id: 4,
    name: "Ana P.",
    role: "Marketing Manager",
    content: "Increíble servicio. Tenía dudas sobre la duración de las cuentas pero llevan meses funcionando genial. Repetiré seguro.",
    rating: 5,
    product: "Spotify Premium"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">
            Clientes <span className="text-gradient">Satisfechos</span>
          </h2>
          <p className="section-subtitle">
            Miles de usuarios ya disfrutan de sus cuentas premium al mejor precio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-background/60 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <div className="mb-6 relative flex-1">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground relative z-10 pl-4 italic">
                  "{testimonial.content}"
                </p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
