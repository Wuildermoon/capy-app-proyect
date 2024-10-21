import i18n from "i18next";
import LanguagueDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguagueDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    load: "languageOnly",
    loadPath: "/locales/{{lng}}/{{ns}}/option-bar.json",
    react: {
      useSuspense: true,
      transEmptyNodeValue: "Texto no disponible",
    },
  });

export default i18n;
