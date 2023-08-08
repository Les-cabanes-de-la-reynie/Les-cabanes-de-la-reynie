import { ProductCategoryEnum } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import Link from 'next/link'

const AsideProductCategories = () => {
  return (
    <aside className='flex h-full w-full flex-col lg:w-1/4'>
      <Heading level={2} className='my-0 bg-primary px-4 py-10 md:my-0'>
        Tous nos produits
      </Heading>
      <Link
        href='/'
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Notre carte
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Burger}`}
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Burgers
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Side}`}
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Petites faims
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Drink}`}
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Boissons
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Dessert}`}
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Desserts
      </Link>
      <Link
        href={`/products/category/${ProductCategoryEnum.Salad}`}
        className='flex bg-primary p-4 font-medium text-white hover:bg-opacity-50'
      >
        Salades
      </Link>
    </aside>
  )
}
export default AsideProductCategories
