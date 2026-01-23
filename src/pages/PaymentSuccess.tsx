import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            ¡Pago completado!
          </h1>
          <p className="text-muted-foreground mb-2">
            Gracias por tu compra. En breve recibirás un correo con los detalles.
          </p>
          <p className="text-muted-foreground">
            También te contactaremos por WhatsApp para enviarte tus credenciales.
          </p>
        </div>
        <Link
          to="/"
          className="btn-primary inline-flex"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
