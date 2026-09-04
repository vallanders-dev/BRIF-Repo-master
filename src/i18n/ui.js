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
    'nav.parents': 'Parents',
    'nav.parentsOverview': 'Overview',
    'nav.parentsCalendar': 'Calendar',
    'nav.parentsSupplies': 'Supply Lists',
    'nav.reglementInterieur': 'Internal Regulations',
    'nav.parentsUniform': 'Uniform',
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
    'nav.parents': 'Parents',
    'nav.parentsOverview': "Vue d'ensemble",
    'nav.parentsCalendar': 'Calendrier',
    'nav.parentsSupplies': 'Fournitures scolaires',
    'nav.reglementInterieur': 'Règlement Intérieur',
    'nav.parentsUniform': 'Uniforme',
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
  parents:         { en: 'parents',          fr: 'parents' },
  parentsCalendar: { en: 'parents/calendar', fr: 'parents/calendrier' },
  reglementInterieur: { en: 'parents/internal-regulations', fr: 'parents/reglement-interieur' },
  parentsUniform: { en: 'parents/uniform', fr: 'parents/uniforme' },
  // Supply lists: an index page grouping all classes by stage, plus one page
  // per class. Slugs reverse word order between languages on purpose — e.g.
  // "year-1-cp1" in English reads as "cp1-year-1" in French — to match how
  // each language actually names the class (English leads with "Year N",
  // French leads with the French class name).
  parentsSupplies:        { en: 'parents/supplies',                    fr: 'parents/fournitures' },
  suppliesPreNursery:     { en: 'parents/supplies/pre-nursery-prematernelle', fr: 'parents/fournitures/prematernelle-pre-nursery' },
  suppliesNursery1:       { en: 'parents/supplies/nursery-1-maternelle-1',    fr: 'parents/fournitures/maternelle-1-nursery-1' },
  suppliesNursery2:       { en: 'parents/supplies/nursery-2-maternelle-2',    fr: 'parents/fournitures/maternelle-2-nursery-2' },
  suppliesCp1:            { en: 'parents/supplies/year-1-cp1',   fr: 'parents/fournitures/cp1-year-1' },
  suppliesCp2:            { en: 'parents/supplies/year-2-cp2',   fr: 'parents/fournitures/cp2-year-2' },
  suppliesCe1:            { en: 'parents/supplies/year-3-ce1',   fr: 'parents/fournitures/ce1-year-3' },
  suppliesCe2:            { en: 'parents/supplies/year-4-ce2',   fr: 'parents/fournitures/ce2-year-4' },
  suppliesCm1:            { en: 'parents/supplies/year-5-cm1',   fr: 'parents/fournitures/cm1-year-5' },
  suppliesCm2:            { en: 'parents/supplies/year-6-cm2',   fr: 'parents/fournitures/cm2-year-6' },
  supplies6e:             { en: 'parents/supplies/year-7-6e',    fr: 'parents/fournitures/6e-year-7' },
  supplies5e:             { en: 'parents/supplies/year-8-5e',    fr: 'parents/fournitures/5e-year-8' },
  supplies4e:             { en: 'parents/supplies/year-9-4e',    fr: 'parents/fournitures/4e-year-9' },
  supplies3e:             { en: 'parents/supplies/year-10-3e',   fr: 'parents/fournitures/3e-year-10' },
  supplies2ndeCd:         { en: 'parents/supplies/year-11-2nde-cd', fr: 'parents/fournitures/2nde-cd-year-11' },
  supplies1ereCd:         { en: 'parents/supplies/year-12-1ere-cd', fr: 'parents/fournitures/1ere-cd-year-12' },
  suppliesTerminaleCd:    { en: 'parents/supplies/terminale-cd', fr: 'parents/fournitures/terminale-cd' },
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
