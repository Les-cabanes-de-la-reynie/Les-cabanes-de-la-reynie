import { ProductCategoryEnum } from '@/_types/products'
import CategoryCard from '@/components/elements/CategoryCard'
import Heading from '@/components/elements/Heading'

const ProductCategories = () => {
  return (
    <section className='container lg:ml-8'>
      <Heading level={1} className='my-8'>
        Notre carte
      </Heading>
      <div className='grid grid-cols-2 items-start gap-4 pb-16 md:grid-cols-3 md:gap-8'>
        <CategoryCard category={ProductCategoryEnum.Burger} title={'BURGER'} />
        <CategoryCard category={ProductCategoryEnum.Side} title={'SIDE'} />
        <CategoryCard category={ProductCategoryEnum.Drink} title={'DRINK'} />
        <CategoryCard
          category={ProductCategoryEnum.Dessert}
          title={'DESSERT'}
        />
        <CategoryCard category={ProductCategoryEnum.Salad} title={'SALAD'} />
      </div>
    </section>
  )
}
export default ProductCategories
