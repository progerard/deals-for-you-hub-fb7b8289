import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-20 w-20 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          ¡Pago completado!
        </h1>
        <p className="text-muted-foreground mb-8">
          Tu compra se ha procesado correctamente. Recibirás un email con los detalles de tu pedido.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
