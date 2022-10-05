import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    translations: {
        en: { lang },
        th: { lang },
    },
    loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (
        await import('./locales/en/site.json')
      ).default,
    },
    {
      locale: 'th',
      key: '',
      loader: async () => (
        await import('./locales/th/site.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);