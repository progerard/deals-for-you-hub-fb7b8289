import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-card border-t border-border shadow-lg animate-slide-up">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación. 
                Al hacer clic en "Aceptar", consientes el uso de todas las cookies. 
                Consulta nuestra{" "}
                <button
                  onClick={() => document.getElementById("privacy-modal")?.classList.remove("hidden")}
                  className="text-primary hover:underline"
                >
                  Política de Privacidad
                </button>
                ,{" "}
                <button
                  onClick={() => document.getElementById("legal-modal")?.classList.remove("hidden")}
                  className="text-primary hover:underline"
                >
                  Aviso Legal
                </button>
                {" "}y{" "}
                <button
                  onClick={() => document.getElementById("terms-modal")?.classList.remove("hidden")}
                  className="text-primary hover:underline"
                >
                  Términos y Condiciones
                </button>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
