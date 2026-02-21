import { X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const LegalSection = ({ titleKey, textKey }: { titleKey: string; textKey: string }) => {
  const { t } = useTranslation();
  return (
    <p><strong className="text-foreground">{t(titleKey)}</strong><br />{t(textKey)}</p>
  );
};

const LegalModals = () => {
  const { t } = useTranslation();

  const modalConfig = [
    {
      id: "privacy-modal",
      title: t("legal.privacy.title"),
      sections: Array.from({ length: 7 }, (_, i) => ({
        titleKey: `legal.privacy.${i + 1}.title`,
        textKey: `legal.privacy.${i + 1}.text`,
      })),
    },
    {
      id: "legal-modal",
      title: t("legal.notice.title"),
      sections: Array.from({ length: 6 }, (_, i) => ({
        titleKey: `legal.notice.${i + 1}.title`,
        textKey: `legal.notice.${i + 1}.text`,
      })),
    },
    {
      id: "terms-modal",
      title: t("legal.terms.title"),
      sections: Array.from({ length: 10 }, (_, i) => ({
        titleKey: `legal.terms.${i + 1}.title`,
        textKey: `legal.terms.${i + 1}.text`,
      })),
    },
  ];

  return (
    <>
      {modalConfig.map((modal) => (
        <div
          key={modal.id}
          id={modal.id}
          className="hidden fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && e.currentTarget.classList.add("hidden")}
        >
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-xl font-bold">{modal.title}</h2>
              <button
                onClick={() => document.getElementById(modal.id)?.classList.add("hidden")}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-muted-foreground space-y-4">
              {modal.sections.map((section, i) => (
                <LegalSection key={i} titleKey={section.titleKey} textKey={section.textKey} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LegalModals;
