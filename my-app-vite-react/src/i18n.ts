import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import the default language files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the detected language is not available
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      // Language detection options (e.g., from cookies or browser settings)
      order: ['navigator', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;
