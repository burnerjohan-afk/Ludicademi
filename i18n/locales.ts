/** Constantes i18n sans alias @ — importables par le middleware Edge */
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';
