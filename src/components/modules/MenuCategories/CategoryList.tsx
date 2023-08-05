import { ClassNameProps } from '@/_types/components'
import { ProductEntity, ProductCategoryEnum } from '@/_types/products'
import Category from './Category'

interface CategoryListProps extends ClassNameProps {
  products: ProductEntity[]
}

interface ProductFilteredByCategory {
  burger: ProductEntity[]
  side: ProductEntity[]
  drink: ProductEntity[]
  dessert: ProductEntity[]
  salad: ProductEntity[]
}

const CategoryList = ({ products }: CategoryListProps) => {
  const filteredProducts = products.reduce(
    (total, curr) => {
      switch (curr?.attributes?.category) {
        case ProductCategoryEnum.Burger:
          total.burger.push(curr)
          break
        case ProductCategoryEnum.Side:
          total.side.push(curr)
          break
        case ProductCategoryEnum.Drink:
          total.drink.push(curr)
          break
        case ProductCategoryEnum.Dessert:
          total.dessert.push(curr)
          break
        case ProductCategoryEnum.Salad:
          total.salad.push(curr)
          break
        default:
          break
      }

      return total
    },
    {
      burger: [],
      side: [],
      drink: [],
      dessert: [],
      salad: []
    } as ProductFilteredByCategory
  )

  return (
    <>
      <Category
        id={ProductCategoryEnum.Burger}
        title={'BURGER'}
        products={filteredProducts.burger}
      />
      <Category
        id={ProductCategoryEnum.Side}
        title={'SIDE'}
        products={filteredProducts.side}
      />
      <Category
        id={ProductCategoryEnum.Drink}
        title={'DRINK'}
        products={filteredProducts.drink}
      />
      <Category
        id={ProductCategoryEnum.Dessert}
        title={'DESSERT'}
        products={filteredProducts.dessert}
      />
      <Category
        id={ProductCategoryEnum.Salad}
        title={'SALAD'}
        products={filteredProducts.salad}
      />
    </>
  )
}
export default CategoryList
