import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-slide-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cuentas Premium al mejor precio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Accede a{' '}
            <span className="text-gradient">ChatGPT</span>
            {' '}y{' '}
            <span className="text-gradient-accent">Canva Pro</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Consigue acceso a las mejores herramientas de IA y diseño a precios increíbles. Entrega inmediata y soporte garantizado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <a href="#productos" className="btn-primary gap-2">
              <Zap className="h-5 w-5" />
              Ver productos
            </a>
            <a 
              href="https://wa.me/34640329880" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
