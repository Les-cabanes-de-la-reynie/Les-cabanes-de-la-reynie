import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { ProductCategoryEnum } from '@/_types/products'
import Heading from '@/components/elements/Heading'

const AsideProductCategories = () => {
  const { t, lang } = useTranslation('home')

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {t('allOurProducts')}
      </Heading>
      <Link
        href={`/${lang}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('ourMenu')}
      </Link>
      <Link
        href={`/${lang}/products/category/${ProductCategoryEnum.Burger}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('burgerTitle')}
      </Link>
      <Link
        href={`/${lang}/products/category/${ProductCategoryEnum.Side}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('sideTitle')}
      </Link>
      <Link
        href={`/${lang}/products/category/${ProductCategoryEnum.Drink}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('drinkTitle')}
      </Link>
      <Link
        href={`/${lang}/products/category/${ProductCategoryEnum.Dessert}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('dessertTitle')}
      </Link>
      <Link
        href={`/${lang}/products/category/${ProductCategoryEnum.Salad}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {t('saladTitle')}
      </Link>
    </aside>
  )
}
export default AsideProductCategories
