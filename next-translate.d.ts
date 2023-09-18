import type { Paths, I18n, Translate } from 'next-translate'

export interface TranslationsKeys {
  common: Paths<typeof import('./locales/en/common.json')>
  delivery: Paths<typeof import('./locales/en/delivery.json')>
  errors: Paths<typeof import('./locales/en/errors.json')>
  footer: Paths<typeof import('./locales/en/footer.json')>
  home: Paths<typeof import('./locales/en/home.json')>
  navigation: Paths<typeof import('./locales/en/navigation.json')>
  profile: Paths<typeof import('./locales/en/profile.json')>
  contact: Paths<typeof import('./locales/en/contact.json')>
}

export interface TypeSafeTranslate<Namespace extends keyof TranslationsKeys>
  extends Omit<I18n, 't'> {
  t: {
    (
      key: TranslationsKeys[Namespace],
      ...rest: Tail<Parameters<Translate>>
    ): string
    <T extends string>(template: TemplateStringsArray): string
  }
}

declare module 'next-translate/useTranslation' {
  export default function useTranslation<
    Namespace extends keyof TranslationsKeys
  >(namespace: Namespace): TypeSafeTranslate<Namespace>
}
