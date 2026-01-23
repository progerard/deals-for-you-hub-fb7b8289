import { MessageCircle, Send, Sparkles } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Respuesta inmediata</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          ¿Listo para{' '}
          <span className="text-gradient">empezar</span>?
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Contáctanos ahora y recibe tu cuenta en minutos. Estamos disponibles 24/7 para ayudarte.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/34640329880?text=Hola!%20Me%20interesa%20información%20sobre%20los%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-3 text-lg px-8 py-4"
          >
            <MessageCircle className="h-6 w-6" />
            Contactar por WhatsApp
          </a>
          
          <a
            href="https://t.me/Gerardo22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-all duration-300 text-lg"
          >
            <Send className="h-6 w-6" />
            Contactar por Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
