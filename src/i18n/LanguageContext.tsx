import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { es } from "./translations/es";
import { en } from "./translations/en";

type Language = "es" | "en";
type Translations = typeof es;

interface LanguageContextType {
  language: Language;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Language, Translations> = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || "es";
  return browserLang.startsWith("es") ? "es" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language] = useState<Language>(detectLanguage);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = (translations[language] as Record<string, string>)[key] || (translations.es as Record<string, string>)[key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};
