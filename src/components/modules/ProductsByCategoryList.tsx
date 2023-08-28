import { Product } from '@/_types/products'
import ProductCard from '@/components/elements/ProductCard.tsx'
import { getProductsByCategory } from '@/services/products'

interface ProductsByCategoryListProps extends Pick<Product, 'category'> {}

const ProductsByCategoryList = async ({
  category
}: ProductsByCategoryListProps) => {
  if (!category) throw new Error(`Invalid category : ${category}`)

  const products = await getProductsByCategory(category)

  return (
    <ul className='grid grid-cols-1 gap-4 pb-16 xs:grid-cols-2 md:grid-cols-3 md:gap-8'>
      {products?.length > 0
        ? products.map((product, i) => (
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
