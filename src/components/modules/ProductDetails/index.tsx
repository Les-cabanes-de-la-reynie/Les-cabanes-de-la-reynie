import { Product } from '@/_types/products'
import ProductDetailsHeader from './ProductDetailsHeader'
import ProductDetailsBody from './ProductDetailsBody'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className='container flex flex-col justify-center gap-4 lg:flex-grow lg:flex-row lg:items-center lg:gap-8'>
      <ProductDetailsHeader image={product?.image} />
      <ProductDetailsBody product={product} />
    </div>
  )
}
export default ProductDetails
