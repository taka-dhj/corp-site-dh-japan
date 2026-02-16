import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ja from './locales/ja.json';
import en from './locales/en.json';

// ブラウザの言語設定から優先言語を取得する関数
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  // 日本語の場合（ja, ja-JP など）
  if (browserLang && browserLang.toLowerCase().startsWith('ja')) {
    return 'ja';
  }
  // それ以外は英語
  return 'en';
};

// URLから言語を検出する関数
const getLanguageFromPath = (): string => {
  const path = window.location.pathname;
  if (path.startsWith('/ja')) {
    return 'ja';
  }
  // URLに言語プレフィックスがない場合はnullを返す
  return '';
};

// 初期言語の決定とリダイレクト処理
const determineInitialLanguage = (): string => {
  const pathLang = getLanguageFromPath();
  
  // URLに既に言語プレフィックスがある場合はそれを使用
  if (pathLang) {
    return pathLang;
  }
  
  // URLに言語プレフィックスがない場合は、ブラウザの言語設定を確認
  const browserLang = getBrowserLanguage();
  
  // ブラウザが日本語の場合は/jaにリダイレクト
  if (browserLang === 'ja' && window.location.pathname === '/') {
    window.location.replace('/ja');
    return 'ja';
  }
  
  // それ以外は英語（プレフィックスなし）
  return 'en';
};

const initialLanguage = determineInitialLanguage();

i18n
  .use(LanguageDetector) // ブラウザの言語設定を自動検出
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: ja
      },
      en: {
        translation: en
      }
    },
    fallbackLng: 'en', // デフォルト言語を英語に変更
    lng: initialLanguage, // 決定された言語を使用
    interpolation: {
      escapeValue: false // Reactは既にXSS対策済み
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupQuerystring: 'lng'
    }
  });

export default i18n;


