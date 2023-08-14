import { PropsWithChildren } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { cn } from '@/utils/cn'
import ProductList from '../../elements/ProductList'
import Heading from '../../elements/Heading'
import { ClassNameProps } from '@/_types/components'
import { ProductCategoryEnum } from '@/_types/products'

export interface CategoryProps extends ClassNameProps, PropsWithChildren {
  id: string
  title: string
}

const Category = ({ id, title, className, children }: CategoryProps) => {
  const { t } = useTranslation('home')

  // TODO Refacto with remove await in ProductCategory page
  const categoryTitle = () => {
    switch (title) {
      case ProductCategoryEnum.Burger:
        return t('burgerTitle')
      case ProductCategoryEnum.Side:
        return t('sideTitle')
      case ProductCategoryEnum.Drink:
        return t('drinkTitle')
      case ProductCategoryEnum.Dessert:
        return t('dessertTitle')
      case ProductCategoryEnum.Salad:
        return t('saladTitle')

      default:
        return title
    }
  }

  return (
    <section id={id} className={cn('px-4', className)}>
      <Heading level={1} className='my-8'>
        <span>{categoryTitle()}</span>
      </Heading>
      <ProductList>{children}</ProductList>
    </section>
  )
}
export default Category
