import { ProductCategoryEnum } from '@/_types/products'
import Category from '@/components/modules/OurMenu/Category'
import AsideProductCategories from '@/components/modules/OurMenu/AsideProductCategories'
import MenuContainer from '@/components/modules/OurMenu/MenuContainer'
import ProductsByCategoryList from '@/components/modules/ProductsByCategoryList'

export default function ProductCategory({
  params: { category }
}: {
  params: { category: ProductCategoryEnum }
}) {
  return (
    <MenuContainer>
      <AsideProductCategories />
      <Category id={category} title={category}>
        <ProductsByCategoryList category={category} />
      </Category>
    </MenuContainer>
  )
}
