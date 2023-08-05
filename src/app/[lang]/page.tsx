import { PageProps } from '@/_types/misc'
import { getDictionary } from '@/lib/dictionary'
import { getProducts } from '@/services/products'
import { ProductEntity } from '@/_types/products'
import Heading from '@/components/elements/Heading'
import MenuCategories from '@/components/modules/MenuCategories'

export default async function Home({ params: { lang } }: PageProps) {
  const { Home } = await getDictionary(lang)

  const allProductsEntity = await getProducts()
  const products = allProductsEntity?.data as ProductEntity[]

  return (
    <>
      <Heading level={1} className='my-8 text-center'>
        {Home.title}
      </Heading>
      <MenuCategories products={products} />
    </>
  )
}
