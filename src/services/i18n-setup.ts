import { initReactI18next } from "react-i18next";
import i18next, { InitOptions, Resource } from "i18next";
import ptBR from "../locales/pt-BR.json";
import en from "../locales/en.json";

const availableLanguages = ["pt-BR", "en"];

const translationOptions: InitOptions = {
  lng: "en",
  load: "currentOnly",
  compatibilityJSON: "v3",
  preload: availableLanguages,
  debug: false,
  supportedLngs: availableLanguages,
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "pt-BR": ptBR as Resource,
    en: en as Resource,
  },
};

export default i18next.use(initReactI18next).init(translationOptions);
