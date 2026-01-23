import { ShoppingCart, X, Minus, Plus, Trash2, MessageCircle, Send, Car } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen } = useCart();

  const getCartSummary = () => {
    return items.map((item) => `${item.quantity}x ${item.name} (${item.price}€)`).join(", ");
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa comprar: ${getCartSummary()}. Total: ${total} euros`
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=34640329880&text=${whatsappMessage}&type=phone_number&app_absent=0`;
  const telegramLink = `https://t.me/Gerardo22`;
  const forocochesLink = `https://www.forocoches.com/foro/private.php?do=newpm&u=Gerardo22`;

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-display text-xl font-bold">Tu Carrito</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
                    <p>Tu carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{item.name}</h3>
                          <p className="text-sm text-primary font-semibold">
                            {item.price}€
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-background flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-background flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors ml-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-gradient">{total}€</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Contacta con nosotros para finalizar tu compra
                  </p>

                  {/* Contact Methods */}
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 p-3 rounded-xl text-white transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-xs font-medium">WhatsApp</span>
                    </a>
                    
                    <a
                      href={telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 p-3 rounded-xl text-white transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)' }}
                    >
                      <Send className="h-5 w-5" />
                      <span className="text-xs font-medium">Telegram</span>
                    </a>

                    <a
                      href={forocochesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 p-3 rounded-xl text-white transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #CC5500 100%)' }}
                    >
                      <Car className="h-5 w-5" />
                      <span className="text-xs font-medium">FC</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
