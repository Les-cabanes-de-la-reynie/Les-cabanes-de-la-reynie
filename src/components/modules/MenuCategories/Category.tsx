'use client'

import { useEffect, useMemo, useRef } from 'react'
import ProductList from '../ProductList'
import Heading from '../../elements/Heading'
import { ProductEntity } from '@/_types/products'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { useActiveCategoryStore } from '@/stores/useActiveCategoryStore'

export interface CategoryProps {
  id: string
  products: ProductEntity[]
  title: string
}

const Category = ({ id, products, title }: CategoryProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    rootMargin: '-50% 0% -50% 0%'
  })

  const { entries, addEntry, removeEntry } = useActiveCategoryStore()

  useEffect(() => {
    const isCategoryVisible = !!entry?.isIntersecting

    if (isCategoryVisible) {
      return addEntry(entry)
    }

    if (entries?.length > 0) {
      // Remove when the category is no more visible
      return removeEntry(id)
    }
  }, [entries?.length, entry, id, addEntry, removeEntry])

  const categoryTitle = useMemo(
    () => (
      <Heading level={2}>
        <span>{title}</span>
      </Heading>
    ),
    [title]
  )

  return (
    <section
      ref={ref}
      id={id}
      className='w-full scroll-mt-[calc(4.5rem+3.5rem)] md:scroll-mt-[calc(4.5rem+3.5rem+1rem)]'
    >
      {categoryTitle}
      <ProductList products={products} />
    </section>
  )
}
export default Category
