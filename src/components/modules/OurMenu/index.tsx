import { ClassNameProps } from '@/_types/components'
import AsideProductCategories from './AsideProductCategories'
import MenuContainer from './MenuContainer'
import Category from './Category'
import burgerImage from '../../images/burger.jpg'
import sideImage from '../../images/side.jpg'
import drinkImage from '../../images/drink.jpg'
import dessertImage from '../../images/dessert.jpg'
import saladImage from '../../images/salad.jpg'
import CategoryCard from '@/components/elements/CategoryCard'
import Image from 'next/image'
import { ProductCategoryEnum } from '@/_types/products'
import clsx from 'clsx'

interface OurMenuProps extends ClassNameProps {}

const OurMenu = ({ className }: OurMenuProps) => {
  return (
    <MenuContainer className={clsx(className)}>
      <AsideProductCategories />
      <Category id='ourMenu' title='Our menu'>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Burger}
          title={'Burgers'}
        >
          <Image
            src={burgerImage}
            alt='burger category'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </CategoryCard>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Side}
          title={'Sides'}
        >
          <Image
            src={sideImage}
            alt='side category'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </CategoryCard>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Drink}
          title={'Drinks'}
        >
          <Image
            src={drinkImage}
            alt='drink category'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </CategoryCard>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Dessert}
          title={'Desserts'}
        >
          <Image
            src={dessertImage}
            alt='dessert category'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </CategoryCard>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Salad}
          title={'Salads'}
        >
          <Image
            src={saladImage}
            alt='salad category'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </CategoryCard>
      </Category>
    </MenuContainer>
  )
}
export default OurMenu
