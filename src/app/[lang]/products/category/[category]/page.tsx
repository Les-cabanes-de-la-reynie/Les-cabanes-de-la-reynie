import { getProductsByCategory } from '@/services/products'
import { ProductCategoryEnum, ProductEntity } from '@/_types/products'
import Category from '@/components/modules/OurMenu/Category'
import AsideProductCategories from '@/components/modules/OurMenu/AsideProductCategories'
import MenuContainer from '@/components/modules/OurMenu/MenuContainer'
import ProductCard from '@/components/elements/ProductCard.tsx'

export default async function ProductCategory({
  params: { category }
}: {
  params: { category: ProductCategoryEnum }
}) {
  const allProductsEntity = await getProductsByCategory(category)
  const products = allProductsEntity?.data as ProductEntity[]

  return (
    <MenuContainer>
      <AsideProductCategories />
      <Category id={category} title={category}>
        {products?.length > 0
          ? products.map((product, i) => (
              <ProductCard
                key={`product-card-${product?.id}-${i}`}
                product={product}
              />
            ))
          : null}
      </Category>
    </MenuContainer>
  )
}
