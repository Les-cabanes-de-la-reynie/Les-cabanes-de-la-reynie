// import { ProductCategoryEnum } from '@/_types/products'
// import NavProductCategoriesItem from './NavProductCategoriesItem'
// import { useActiveCategoryStore } from '@/stores/useActiveCategoryStore'
// import { getMostVisibleEntry } from '@/utils/getMostVisibleEntry'

// const NavProductCategories = () => {
//   const { entries } = useActiveCategoryStore()
//   const activeCategoryEntry = getMostVisibleEntry(entries)
//   const activeCategory = activeCategoryEntry?.target?.id

//   return (
//     <nav className='sticky bottom-0 left-0 right-0 top-[4.5rem] z-10 box-border h-14 w-full overflow-auto rounded-full border border-border bg-stone-950 text-stone-600 shadow-md'>
//       <ol tabIndex={-1} className='flex'>
//         <NavProductCategoriesItem
//           anchorId={`#${ProductCategoryEnum.Burger}`}
//           isActive={activeCategory === ProductCategoryEnum.Burger}
//         >
//           Burger
//         </NavProductCategoriesItem>
//         <NavProductCategoriesItem
//           anchorId={`#${ProductCategoryEnum.Side}`}
//           isActive={activeCategory === ProductCategoryEnum.Side}
//         >
//           Side
//         </NavProductCategoriesItem>
//         <NavProductCategoriesItem
//           anchorId={`#${ProductCategoryEnum.Drink}`}
//           isActive={activeCategory === ProductCategoryEnum.Drink}
//         >
//           Drink
//         </NavProductCategoriesItem>
//         <NavProductCategoriesItem
//           anchorId={`#${ProductCategoryEnum.Dessert}`}
//           isActive={activeCategory === ProductCategoryEnum.Dessert}
//         >
//           Dessert
//         </NavProductCategoriesItem>
//         <NavProductCategoriesItem
//           anchorId={`#${ProductCategoryEnum.Salad}`}
//           isActive={activeCategory === ProductCategoryEnum.Salad}
//         >
//           Salad
//         </NavProductCategoriesItem>
//       </ol>
//     </nav>
//   )
// }
// export default NavProductCategories
