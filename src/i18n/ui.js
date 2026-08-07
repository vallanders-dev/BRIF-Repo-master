// =========================================================================
// i18n configuration for British & French Academy
// Two languages: English (en, default) and French (fr).
// The `t` dictionary holds shared UI strings (nav, footer, buttons).
// Page-specific content lives in src/data/content.js.
// =========================================================================

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

// Shared UI strings used across components (header, footer, buttons).
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programmes',
    'nav.programsOverview': 'Overview',
    'nav.programsClassic': 'Classic Programme',
    'nav.programsCambridge': 'Cambridge International Programme',
    'nav.programsImi': 'Technical Programme IMI',
    'nav.life': 'Student Life',
    'nav.news': 'News',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.apply': 'Apply now',
    'lang.switch': 'FR',
    'lang.switchLabel': 'Passer en français',
    'footer.quicklinks': 'Quick links',
    'footer.programs': 'Programmes',
    'footer.contact': 'Get in touch',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'A bilingual education for Cotonou since 2011.',
    'footer.legal': 'Legal Mentions',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'meta.langName': 'English',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.programs': 'Programmes',
    'nav.programsOverview': "Vue d'ensemble",
    'nav.programsClassic': 'Programme Classique',
    'nav.programsCambridge': 'Programme International Cambridge',
    'nav.programsImi': 'Programme Technique IMI',
    'nav.life': 'Vie scolaire',
    'nav.news': 'Actualités',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.apply': 'Inscription',
    'lang.switch': 'EN',
    'lang.switchLabel': 'Switch to English',
    'footer.quicklinks': 'Liens rapides',
    'footer.programs': 'Programmes',
    'footer.contact': 'Nous contacter',
    'footer.rights': 'Tous droits réservés.',
    'footer.tagline': 'Une éducation bilingue à Cotonou depuis 2011.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Politique de cookies',
    'meta.langName': 'Français',
  },
};

// Returns a translator function bound to a language.
export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// Page slugs per language, so URLs read naturally in each language.
// key -> { en: 'about', fr: 'a-propos' }
export const routes = {
  home:       { en: '',            fr: '' },
  about:      { en: 'about',       fr: 'a-propos' },
  programs:   { en: 'programmes',  fr: 'programmes' },
  programsClassic:   { en: 'programmes/classic',       fr: 'programmes/classique' },
  programsCambridge: { en: 'programmes/cambridge',     fr: 'programmes/cambridge' },
  programsImi:       { en: 'programmes/technical-imi', fr: 'programmes/technique-imi' },
  life:       { en: 'student-life',fr: 'vie-scolaire' },
  news:       { en: 'news',        fr: 'actualites' },
  admissions: { en: 'admissions',  fr: 'admissions' },
  contact:    { en: 'contact',     fr: 'contact' },
  enrol:      { en: 'enrol',       fr: 'inscription' },
  legal:      { en: 'legal-mentions', fr: 'mentions-legales' },
  privacy:    { en: 'privacy-policy', fr: 'politique-de-confidentialite' },
  cookies:    { en: 'cookie-policy',  fr: 'politique-de-cookies' },
};

// Build a localized path for a route key.
export function localizedPath(lang, routeKey) {
  const slug = routes[routeKey]?.[lang] ?? '';
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

// Given the current route key, return the path to the same page in the other language.
export function alternatePath(currentLang, routeKey) {
  const other = currentLang === 'en' ? 'fr' : 'en';
  return localizedPath(other, routeKey);
}
