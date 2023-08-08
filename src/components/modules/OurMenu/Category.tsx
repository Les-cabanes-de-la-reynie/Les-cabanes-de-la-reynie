import { useMemo } from 'react'
import ProductList from '../ProductList'
import Heading from '../../elements/Heading'
import { ProductEntity } from '@/_types/products'

export interface CategoryProps {
  id: string
  products: ProductEntity[]
  title: string
}

const Category = ({ id, products, title }: CategoryProps) => {
  const categoryTitle = useMemo(
    () => (
      <Heading level={2}>
        <span>{title}</span>
      </Heading>
    ),
    [title]
  )

  return (
    <section id={id} className='w-full'>
      {categoryTitle}
      <ProductList products={products} />
    </section>
  )
}
export default Category
