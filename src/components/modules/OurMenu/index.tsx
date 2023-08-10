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
    <MenuContainer className={clsx(className, 'w-full')}>
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
            className='object-contain'
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
            className='object-contain'
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
            className='object-contain'
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
            className='object-contain'
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
            className='object-contain'
          />
        </CategoryCard>
      </Category>
    </MenuContainer>
  )
}
export default OurMenu
