import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enResource from './en.json'
import zhResource from './zh.json'

i18n
.use(Backend)
.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'zh', // Default language  
        resources: {
            en: {
                translation: enResource,
            },
            zh: {
                translation: zhResource,
            }
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;  
