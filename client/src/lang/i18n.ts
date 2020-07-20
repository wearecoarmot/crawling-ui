import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEn from './translation.en.json';
import translationKo from './translation.ko.json';

export type tLang = 'ko' | 'en';

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'ko',
    fallbackLng: 'ko',
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
