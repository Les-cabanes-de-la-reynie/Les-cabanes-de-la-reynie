import { ProductCategoryEnum } from '@/_types/products'
import Category from '@/components/modules/OurMenu/Category'
import AsideProductCategories from '@/components/modules/AsideProductCategories'
import MenuContainer from '@/components/modules/OurMenu/MenuContainer'
import ProductsByCategoryList from '@/components/modules/ProductsByCategoryList'
import BreadCrumbs from '@/components/elements/BreadCrumbs'

export default function ProductCategory({
  params: { category }
}: {
  params: { category: ProductCategoryEnum }
}) {
  return (
    <MenuContainer>
      <AsideProductCategories />
      <div>
        <BreadCrumbs className='mt-8 px-4' />
        <Category id={category} title={category}>
          <ProductsByCategoryList category={category} />
        </Category>
      </div>
    </MenuContainer>
  )
}
