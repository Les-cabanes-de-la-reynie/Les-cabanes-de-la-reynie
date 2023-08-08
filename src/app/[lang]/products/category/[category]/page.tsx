import { getProductsByCategory } from '@/services/products'
import { Locale } from '../../../../../../i18n.config'
import { ProductCategoryEnum, ProductEntity } from '@/_types/products'
import Category from '@/components/modules/OurMenu/Category'

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
        return 'BURGERS'
      case ProductCategoryEnum.Side:
        return 'SIDES'
      case ProductCategoryEnum.Drink:
        return 'DRINKS'
      case ProductCategoryEnum.Dessert:
        return 'DESSERTS'
      case ProductCategoryEnum.Salad:
        return 'SALADS'

      default:
        return ''
    }
  }

  return (
    <div className='container'>
      <Category id={category} title={categoryTitle()} products={products} />
    </div>
  )
}
