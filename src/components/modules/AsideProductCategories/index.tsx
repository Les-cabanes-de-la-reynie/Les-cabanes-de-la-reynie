import useTranslation from 'next-translate/useTranslation'
import { ProductCategoryEnum } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import AsideProductCategory from './AsideProductCategory'

const AsideProductCategories = () => {
  const { t, lang } = useTranslation('home')

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {t('allOurProducts')}
      </Heading>
      <AsideProductCategory href={`/${lang}`}>
        {t('ourMenu')}
      </AsideProductCategory>
      <AsideProductCategory
        href={`/${lang}/products/category/${ProductCategoryEnum.Burger}`}
      >
        {t('burgerTitle')}
      </AsideProductCategory>
      <AsideProductCategory
        href={`/${lang}/products/category/${ProductCategoryEnum.Side}`}
      >
        {t('sideTitle')}
      </AsideProductCategory>
      <AsideProductCategory
        href={`/${lang}/products/category/${ProductCategoryEnum.Drink}`}
      >
        {t('drinkTitle')}
      </AsideProductCategory>
      <AsideProductCategory
        href={`/${lang}/products/category/${ProductCategoryEnum.Dessert}`}
      >
        {t('dessertTitle')}
      </AsideProductCategory>
      <AsideProductCategory
        href={`/${lang}/products/category/${ProductCategoryEnum.Salad}`}
      >
        {t('saladTitle')}
      </AsideProductCategory>
    </aside>
  )
}
export default AsideProductCategories
