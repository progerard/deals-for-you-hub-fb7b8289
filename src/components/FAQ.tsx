import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos pagos por Bizum, transferencia bancaria y PayPal. Una vez realizado el pago, te enviaremos las credenciales de acceso en menos de 24 horas.",
  },
  {
    question: "¿Cuánto tiempo tarda en llegar mi cuenta?",
    answer:
      "El tiempo de entrega es de máximo 24 horas después de confirmar el pago. En la mayoría de casos, recibirás tus credenciales en menos de 1 hora durante horario comercial.",
  },
  {
    question: "¿Qué garantía tienen las cuentas?",
    answer:
      "Todas nuestras cuentas incluyen garantía completa durante todo el período de suscripción. Si tienes cualquier problema, te lo solucionamos o te devolvemos el dinero.",
  },
  {
    question: "¿Puedo compartir la cuenta con otras personas?",
    answer:
      "Dependiendo del plan que elijas. Los planes individuales son para uso personal, mientras que los planes Team o Familia permiten múltiples usuarios según las condiciones del servicio.",
  },
  {
    question: "¿Cómo recibo las credenciales de acceso?",
    answer:
      "Te enviamos las credenciales por WhatsApp o Telegram, según tu preferencia. También puedes recibirlas por email si lo prefieres.",
  },
  {
    question: "¿Qué pasa si tengo problemas con mi cuenta?",
    answer:
      "Contamos con soporte 24/7 por WhatsApp. Si tienes cualquier incidencia, la resolvemos de inmediato o te proporcionamos una cuenta de reemplazo sin coste adicional.",
  },
];

const FAQ = () => {
  return (
    <section 
      id="faq" 
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </motion.div>

          <h2 className="section-title mb-6">
            <span className="text-gradient">Preguntas</span> Frecuentes
          </h2>
          <p className="section-subtitle">
            Resolvemos tus dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="glass rounded-2xl px-6 data-[state=open]:shadow-card-hover transition-all duration-300 border-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
