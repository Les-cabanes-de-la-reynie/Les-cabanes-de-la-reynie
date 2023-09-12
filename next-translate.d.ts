import type { Paths, I18n, Translate } from 'next-translate'

export interface TranslationsKeys {
  cart: Paths<typeof import('./locales/en/cart.json')>
  checkout: Paths<typeof import('./locales/en/checkout.json')>
  common: Paths<typeof import('./locales/en/common.json')>
  delivery: Paths<typeof import('./locales/en/delivery.json')>
  errors: Paths<typeof import('./locales/en/errors.json')>
  footer: Paths<typeof import('./locales/en/footer.json')>
  home: Paths<typeof import('./locales/en/home.json')>
  navigation: Paths<typeof import('./locales/en/navigation.json')>
  product: Paths<typeof import('./locales/en/product.json')>
  profile: Paths<typeof import('./locales/en/profile.json')>
  restaurants: Paths<typeof import('./locales/en/restaurants.json')>
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
