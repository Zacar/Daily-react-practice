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
    returnObjects: true,

    resources: {
      en: {
        translations: {
          greeting: "Hello, Welcome!",
          description: {
            line1: "hello how are you",
            line2: "I am {{name}} Manandhar your developer",
          },
        },
      },
      fr: {
        translations: {
          greeting: "Bonjour, Bienvenue !",
          description: {
            line1: "Je m'appelle {{name}}.",
            line2: "Merci beaucoup !",
          },
        },
      },
      ne: {
        translations: {
          greeting: "नमस्कार, स्वागत छ!",
          description: {
            line1: "तपाईंलाई कस्तो छ?",
            line2: "तपाईंलाई भेटेर खुसी लाग्यो।",
          },
        },
      },
      jp: {
        translations: {
          greeting: "こんにちは!",
          description: {
            line1: "元気ですか？",
            line2: "私の名前はサカールです",
          },
        },
      },
      ar: {
        translations: {
          greeting: "مرحباً، أهلاً وسهلاً!",
          description: {
            line1: "مرحباً، كيف حالك؟",
            line2: "أنا ساكار ماناندار، مطورك.",
          },
        },
      },
    },
  });
