import { MessageCircle, Shield, Clock, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Pago seguro</h4>
              <p className="text-sm text-muted-foreground">Transacciones protegidas</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="p-3 rounded-xl bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Entrega inmediata</h4>
              <p className="text-sm text-muted-foreground">Recibe tu acceso al instante</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-end">
            <div className="p-3 rounded-xl bg-primary/10">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Soporte 24/7</h4>
              <p className="text-sm text-muted-foreground">Siempre disponibles</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center py-8 px-6 rounded-2xl bg-gradient-card border border-border mb-12">
          <h3 className="font-display text-2xl font-bold mb-4">¿Tienes dudas?</h3>
          <p className="text-muted-foreground mb-6">Escríbenos por WhatsApp y te ayudamos</p>
          <a
            href="https://wa.me/34640329880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
          >
            <MessageCircle className="h-5 w-5" />
            640 329 880
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
