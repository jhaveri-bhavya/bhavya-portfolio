// Helpers for the two-language setup. See src/i18n/ui.ts for the actual copy.

import { ui, defaultLang, languages, type Lang } from './ui';

// '/bhavya-portfolio/' in both dev and production (set by `base` in
// astro.config.mjs). Always ends with a slash.
const BASE = import.meta.env.BASE_URL;

/** Narrow Astro.currentLocale to a language we actually have copy for. */
export function getLang(locale?: string | null): Lang {
  return locale && locale in ui ? (locale as Lang) : (defaultLang as Lang);
}

/** The copy for a given locale, e.g. `t(Astro.currentLocale).experience`. */
export function t(locale?: string | null) {
  return ui[getLang(locale)];
}

/**
 * Build an internal URL for a language.
 *   localeHref('#experience', 'en') -> '/bhavya-portfolio/#experience'
 *   localeHref('#experience', 'de') -> '/bhavya-portfolio/de/#experience'
 * English is the default locale and so has no prefix (see
 * `routing.prefixDefaultLocale: false` in astro.config.mjs).
 */
export function localeHref(path: string, lang: Lang): string {
  const prefix = lang === defaultLang ? BASE : `${BASE}${lang}/`;
  return `${prefix}${path.replace(/^\/+/, '')}`;
}

/**
 * The same page in another language. Strips the base and any locale prefix off
 * the current pathname, then rebuilds it for `lang` - so the switcher lands on
 * the counterpart page rather than always the homepage:
 *   '/bhavya-portfolio/blog/x/'    + 'de' -> '/bhavya-portfolio/de/blog/x/'
 *   '/bhavya-portfolio/de/blog/x/' + 'en' -> '/bhavya-portfolio/blog/x/'
 */
export function localizedPathname(pathname: string, lang: Lang): string {
  let rest = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\/+/, '');

  for (const code of languages) {
    if (code === defaultLang) continue;
    if (rest === code || rest.startsWith(`${code}/`)) {
      rest = rest.slice(code.length).replace(/^\/+/, '');
      break;
    }
  }

  return localeHref(rest, lang);
}

const DATE_LOCALES: Record<Lang, string> = {
  en: 'en-US',
  de: 'de-DE',
};

/** Format a post date in the reader's language. */
export function formatDate(
  date: Date | string,
  lang: Lang,
  options: Intl.DateTimeFormatOptions
): string {
  return new Date(date).toLocaleDateString(DATE_LOCALES[lang], options);
}
