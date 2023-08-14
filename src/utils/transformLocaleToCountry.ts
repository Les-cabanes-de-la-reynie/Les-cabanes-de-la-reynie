import { Locale } from '../../i18n.config'

export const transformLocaleToCountry = (locale: Locale) =>
  locale === 'fr' ? 'Français' : 'English'
