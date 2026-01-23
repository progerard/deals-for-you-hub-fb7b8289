import { MessageCircle, Send } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://t.me/Gerardo22"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)' }}
        aria-label="Contactar por Telegram"
      >
        <Send className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/34640329880?text=Hola!%20Me%20interesa%20información%20sobre%20los%20productos"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
