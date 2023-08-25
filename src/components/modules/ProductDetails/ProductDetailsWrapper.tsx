import { getProduct } from '@/services/products'
import ProductDetails from '.'

interface ProductDetailsWrapperProps {
  productId: number
}

const ProductDetailsWrapper = async ({
  productId
}: ProductDetailsWrapperProps) => {
  const product = await getProduct(productId)

  if (!product) throw new Error('No data with this product')

  return <ProductDetails product={product} />
}
export default ProductDetailsWrapper
