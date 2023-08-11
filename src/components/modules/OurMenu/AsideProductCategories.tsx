import { ProductCategoryEnum } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import Link from 'next/link'
import { Locale } from '../../../../i18n.config'
import { getDictionary } from '@/lib/dictionary'

interface AsideProductCategoriesProps {
  lang: Locale
}

const AsideProductCategories = async ({
  lang
}: AsideProductCategoriesProps) => {
  const { Home } = await getDictionary(lang)

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {Home.allOurProducts}
      </Heading>
      <Link
        href='/'
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.ourMenu}
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Burger}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.burgerTitle}
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Side}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.sideTitle}
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Drink}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.drinkTitle}
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Dessert}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.dessertTitle}
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Salad}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        {Home.saladTitle}
      </Link>
    </aside>
  )
}
export default AsideProductCategories
