import { getProductsByCategory } from '@/services/products'
import { Locale } from '../../../../../../i18n.config'
import { ProductCategoryEnum, ProductEntity } from '@/_types/products'
import Category from '@/components/modules/OurMenu/Category'
import AsideProductCategories from '@/components/modules/OurMenu/AsideProductCategories'
import MenuContainer from '@/components/modules/OurMenu/MenuContainer'
import ProductCard from '@/components/elements/ProductCard.tsx'

export default async function ProductCategory({
  params: { lang, category }
}: {
  params: { lang: Locale; category: ProductCategoryEnum }
}) {
  const allProductsEntity = await getProductsByCategory(category)
  const products = allProductsEntity?.data as ProductEntity[]

  const categoryTitle = () => {
    switch (category) {
      case ProductCategoryEnum.Burger:
        return 'Burgers'
      case ProductCategoryEnum.Side:
        return 'Sides'
      case ProductCategoryEnum.Drink:
        return 'Drinks'
      case ProductCategoryEnum.Dessert:
        return 'Desserts'
      case ProductCategoryEnum.Salad:
        return 'Salads'

      default:
        return ''
    }
  }

  return (
    <MenuContainer>
      <AsideProductCategories />
      <Category id={category} title={categoryTitle()}>
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
