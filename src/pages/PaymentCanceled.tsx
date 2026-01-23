import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/20 mb-6">
            <XCircle className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Pago cancelado
          </h1>
          <p className="text-muted-foreground">
            El pago ha sido cancelado. Si tienes alguna duda, no dudes en contactarnos.
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

export default PaymentCanceled;
