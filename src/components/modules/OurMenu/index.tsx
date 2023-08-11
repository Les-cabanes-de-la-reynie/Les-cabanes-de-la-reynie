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
import { Locale } from '../../../../i18n.config'
import { getDictionary } from '@/lib/dictionary'

interface OurMenuProps extends ClassNameProps {
  lang: Locale
}

const OurMenu = async ({ className, lang }: OurMenuProps) => {
  const { Home } = await getDictionary(lang)

  return (
    <MenuContainer className={clsx(className)}>
      <AsideProductCategories lang={lang} />
      <Category id='ourMenu' title={Home.ourMenu}>
        <CategoryCard
          className='overflow-hidden'
          category={ProductCategoryEnum.Burger}
          title={Home.burgerTitle}
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
          title={Home.sideTitle}
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
          title={Home.drinkTitle}
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
          title={Home.dessertTitle}
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
          title={Home.saladTitle}
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
