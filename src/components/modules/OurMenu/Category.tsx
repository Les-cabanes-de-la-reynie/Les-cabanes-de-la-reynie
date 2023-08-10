import { PropsWithChildren, useMemo } from 'react'
import clsx from 'clsx'
import ProductList from '../../elements/ProductList'
import Heading from '../../elements/Heading'
import { ClassNameProps } from '@/_types/components'

export interface CategoryProps extends ClassNameProps, PropsWithChildren {
  id: string
  title: string
}

const Category = ({ id, title, className, children }: CategoryProps) => {
  const categoryTitle = useMemo(
    () => (
      <Heading level={1} className='my-8'>
        <span>{title}</span>
      </Heading>
    ),
    [title]
  )

  return (
    <section id={id} className={clsx(className)}>
      {categoryTitle}
      <ProductList>{children}</ProductList>
    </section>
  )
}
export default Category
