import { ProductCategoryEnum } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import Link from 'next/link'

const AsideProductCategories = () => {
  return (
    <aside className='flex flex-col bg-primary lg:mr-8 lg:flex-shrink-0'>
      <Heading level={2} className='px-4 py-10'>
        All our products
      </Heading>
      <Link
        href='/'
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Our menu
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Burger}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Burgers
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Side}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Sides
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Drink}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Drinks
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Dessert}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Desserts
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Salad}`}
        className='flex p-4 font-medium text-white hover:bg-stone-900'
      >
        Salads
      </Link>
    </aside>
  )
}
export default AsideProductCategories
