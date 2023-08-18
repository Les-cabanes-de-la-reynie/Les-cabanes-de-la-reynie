'use client'

import { getProduct, getProductKey } from '@/services/products'
import { useQuery } from '@tanstack/react-query'
import ProductDetails from '.'
import Loader from '@/components/elements/Loader'

interface ProductDetailsWrapperProps {
  productId: number
}

const ProductDetailsWrapper = ({ productId }: ProductDetailsWrapperProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: [getProductKey],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
    cacheTime: 0
  })

  if (isLoading) return <Loader />

  if (isError) return <p>Something went wrong</p>

  if (isSuccess && data) {
    return <ProductDetails product={data} />
  }
}
export default ProductDetailsWrapper
