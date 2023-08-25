import { ProductCategoryEnum } from '@/_types/products'
import useTranslation from 'next-translate/useTranslation'

const { t, lang } = useTranslation('home')

export const routes = [
  {
    id: 1,
    href: `/${lang}`,
    label: t('ourMenu')
  },
  {
    id: 2,
    href: `/${lang}/products/category/${ProductCategoryEnum.Burger}`,
    label: t('burgerTitle')
  },
  {
    id: 3,
    href: `/${lang}/products/category/${ProductCategoryEnum.Side}`,
    label: t('sideTitle')
  },
  {
    id: 4,
    href: `/${lang}/products/category/${ProductCategoryEnum.Drink}`,
    label: t('drinkTitle')
  },
  {
    id: 5,
    href: `/${lang}/products/category/${ProductCategoryEnum.Dessert}`,
    label: t('dessertTitle')
  },
  {
    id: 6,
    href: `/${lang}/products/category/${ProductCategoryEnum.Salad}`,
    label: t('saladTitle')
  }
]
