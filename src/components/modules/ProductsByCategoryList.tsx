'use client'

import { Product } from '@/_types/products'
import ProductCard from '@/components/elements/ProductCard.tsx'
import { getProducts, getProductsKey } from '@/services/products'
import { useQuery } from '@tanstack/react-query'
import Loader from '../elements/Loader'

interface ProductsByCategoryListProps extends Pick<Product, 'category'> {}

const ProductsByCategoryList = ({ category }: ProductsByCategoryListProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [getProductsKey],
    queryFn: () => getProducts()
  })

  if (isLoading) return <Loader />

  if (isError) return <p>Something went wrong</p>

  const productList = data?.filter(
    product => product?.attributes?.category === category
  )

  return (
    <ul className='grid grid-cols-2 items-start gap-4 pb-16 md:grid-cols-3 md:gap-8'>
      {productList?.length > 0
        ? productList.map((product, i) => (
            <ProductCard
              key={`product-card-${product?.id}-${i}`}
              product={product}
            />
          ))
        : null}
    </ul>
  )
}
export default ProductsByCategoryList
