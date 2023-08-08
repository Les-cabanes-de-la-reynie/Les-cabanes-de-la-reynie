import { memo } from 'react'
import ProductCard from '../elements/ProductCard.tsx'
import { ProductEntity } from '@/_types/products.js'

export interface ProductListProps {
  products: ProductEntity[]
}

const ProductList = ({ products }: ProductListProps) => {
  return products?.length > 0 ? (
    <ul className='grid grid-cols-2 items-start gap-4 pb-16 md:grid-cols-3 md:gap-8'>
      {products.map((product, i) => (
        <ProductCard
          key={`product-card-${product?.id}-${i}`}
          product={product}
        />
      ))}
    </ul>
  ) : null
}
export default memo(ProductList)
