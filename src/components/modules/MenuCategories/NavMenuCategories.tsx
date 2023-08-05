'use client'

import { ProductCategoryEnum } from '@/_types/products'
import NavMenuCategoriesItem from './NavMenuCategoriesItem'
import { useActiveCategoryStore } from '@/stores/useActiveCategoryStore'
import { getMostVisibleEntry } from '@/utils/getMostVisibleEntry'

const NavMenuCategories = () => {
  const { entries } = useActiveCategoryStore()

  const activeCategoryEntry = getMostVisibleEntry(entries)

  const activeMenuCategory = activeCategoryEntry?.target?.id

  return (
    <nav
      className={`sticky bottom-0 left-0 right-0 top-0 z-10 w-full rounded-full border border-border bg-stone-900`}
    >
      <ol tabIndex={-1} className='flex'>
        <NavMenuCategoriesItem
          anchorId={`#${ProductCategoryEnum.Burger}`}
          isActive={activeMenuCategory === ProductCategoryEnum.Burger}
        >
          Burger
        </NavMenuCategoriesItem>
        <NavMenuCategoriesItem
          anchorId={`#${ProductCategoryEnum.Side}`}
          isActive={activeMenuCategory === ProductCategoryEnum.Side}
        >
          Side
        </NavMenuCategoriesItem>
        <NavMenuCategoriesItem
          anchorId={`#${ProductCategoryEnum.Drink}`}
          isActive={activeMenuCategory === ProductCategoryEnum.Drink}
        >
          Drink
        </NavMenuCategoriesItem>
        <NavMenuCategoriesItem
          anchorId={`#${ProductCategoryEnum.Dessert}`}
          isActive={activeMenuCategory === ProductCategoryEnum.Dessert}
        >
          Dessert
        </NavMenuCategoriesItem>
        <NavMenuCategoriesItem
          anchorId={`#${ProductCategoryEnum.Salad}`}
          isActive={activeMenuCategory === ProductCategoryEnum.Salad}
        >
          Salad
        </NavMenuCategoriesItem>
      </ol>
    </nav>
  )
}
export default NavMenuCategories
