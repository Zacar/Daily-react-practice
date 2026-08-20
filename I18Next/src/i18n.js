import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    defaultNS: "translations",

    resources: {
      en: {
        translations: {
          greeting: "Hello, Welcome!",
        },
      },
      fr: {
        translations: {
          greeting: "Bonjour, Bienvenue !",
        },
      },
      ne: {
        translations: {
          greeting: "नमस्कार, स्वागत छ!",
        },
      },
    },
  });
