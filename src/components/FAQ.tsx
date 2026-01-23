import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-16 md:py-24 px-4 md:px-8 bg-muted/30"
    >
      <div className="max-w-3xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-card transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" 
              }}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
