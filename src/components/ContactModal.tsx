import { MessageCircle, Send, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
}

const ContactModal = ({ isOpen, onClose, productName, productPrice }: ContactModalProps) => {
  if (!isOpen) return null;

  const message = encodeURIComponent(`Hola! Me interesa ${productName} por ${productPrice} euros`);
  const whatsappLink = `https://wa.me/34640329880?text=${message}`;
  const telegramLink = `https://t.me/Gerardo22`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl p-6 w-full max-w-sm animate-scale-in shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            ¿Cómo quieres contactar?
          </h3>
          <p className="text-sm text-muted-foreground">
            Elige tu método preferido para <span className="text-primary font-medium">{productName}</span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
            onClick={onClose}
          >
            <MessageCircle className="h-6 w-6" />
            <span>WhatsApp</span>
          </a>
          
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)' }}
            onClick={onClose}
          >
            <Send className="h-6 w-6" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
