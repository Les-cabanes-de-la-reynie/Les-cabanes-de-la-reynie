import clsx from 'clsx'
import NavMenuCategories from './NavMenuCategories'
import CategoryList from './CategoryList'
import { ClassNameProps } from '@/_types/components'
import { ProductEntity } from '@/_types/products'

interface MenuCategoriesProps extends ClassNameProps {
  products: ProductEntity[]
}

const MenuCategories = ({ products, className }: MenuCategoriesProps) => {
  return (
    <div
      className={clsx(
        className,
        'mb-16 flex flex-col items-center justify-center'
      )}
      data-test='menuCategories'
    >
      <NavMenuCategories />

      <CategoryList products={products} />
    </div>
  )
}
export default MenuCategories
