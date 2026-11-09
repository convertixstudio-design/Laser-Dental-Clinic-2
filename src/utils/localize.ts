import { Language } from '../types';

/**
 * Localizes a single string or value object with bg, en, and pt support.
 * Prioritizes PT when language is 'pt', falling back to EN only if PT is undefined or empty.
 */
export function loc<T>(
  field: { bg: T; en: T; pt?: T } | undefined | null,
  lang: Language,
  fallback?: T
): T {
  if (!field) return (fallback as T) ?? ('' as unknown as T);
  if (lang === 'pt') {
    return (field.pt !== undefined && field.pt !== '') ? field.pt : field.en;
  }
  if (lang === 'bg') {
    return field.bg;
  }
  return field.en;
}

/**
 * Localizes an array object with bg, en, and pt support.
 */
export function locArr<T>(
  field: { bg: T[]; en: T[]; pt?: T[] } | undefined | null,
  lang: Language
): T[] {
  if (!field) return [];
  if (lang === 'pt') {
    return (field.pt && field.pt.length > 0) ? field.pt : field.en;
  }
  if (lang === 'bg') {
    return field.bg;
  }
  return field.en;
}

/**
 * Inline helper for 3-way language string selection.
 */
export function l3(lang: Language, bg: string, en: string, pt: string): string {
  if (lang === 'pt') return pt;
  if (lang === 'bg') return bg;
  return en;
}
