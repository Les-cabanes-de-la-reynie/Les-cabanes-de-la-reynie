import burgerImage from '../../images/burger.jpg'
import sideImage from '../../images/side.jpg'
import drinkImage from '../../images/drink.jpg'
import dessertImage from '../../images/dessert.jpg'
import saladImage from '../../images/salad.jpg'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import useTranslation from 'next-translate/useTranslation'
import Category from './Category'
import { ClassNameProps } from '@/_types/components'
import AsideProductCategories from '../AsideProductCategories'
import MenuContainer from './MenuContainer'
import CategoryCard from '@/components/elements/CategoryCard'
import { ProductCategoryEnum } from '@/_types/products'

interface OurMenuProps extends ClassNameProps {}

const OurMenu = ({ className }: OurMenuProps) => {
  const { t } = useTranslation('home')

  return (
    <MenuContainer className={cn(className)}>
      <AsideProductCategories />
      <Category id='ourMenu' title={t('ourMenu')}>
        <ul className='grid grid-cols-1 gap-4 pb-16 xs:grid-cols-2 md:grid-cols-3 md:gap-8'>
          <CategoryCard
            category={ProductCategoryEnum.Burger}
            title={t('burgerTitle')}
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
            category={ProductCategoryEnum.Side}
            title={t('sideTitle')}
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
            category={ProductCategoryEnum.Drink}
            title={t('drinkTitle')}
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
            category={ProductCategoryEnum.Dessert}
            title={t('dessertTitle')}
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
            category={ProductCategoryEnum.Salad}
            title={t('saladTitle')}
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
        </ul>
      </Category>
    </MenuContainer>
  )
}
export default OurMenu
