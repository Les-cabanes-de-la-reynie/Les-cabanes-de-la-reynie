'use client'

import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'
import AsideProductCategory from './AsideProductCategory'
import { ProductCategoryEnum } from '@/_types/products'

const AsideProductCategories = () => {
  const { t, lang } = useTranslation('home')

  const routes = [
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

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {t('allOurProducts')}
      </Heading>

      {routes.map(({ href, label, id }) => {
        // TODO : Remove "false" in isActiveLink with real active link
        return (
          <AsideProductCategory key={id} href={href} isActiveLink={false}>
            {label}
          </AsideProductCategory>
        )
      })}
    </aside>
  )
}
export default AsideProductCategories
