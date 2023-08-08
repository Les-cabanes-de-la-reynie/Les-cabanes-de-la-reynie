// import { PropsWithChildren, memo } from 'react'
// import Link from 'next/link'
// import Button from '@/components/elements/Button'

// export interface NavProductCategoriesItemProps extends PropsWithChildren {
//   anchorId: string
//   isActive: boolean
// }

// const NavProductCategoriesItem = ({
//   anchorId,
//   isActive,
//   children
// }: NavProductCategoriesItemProps) => {
//   const itemClassName = isActive ? 'bg-green-500' : ''

//   return (
//     <li className={itemClassName}>
//       <Link href={anchorId} className='h-full p-2'>
//         <Button kind='headless' tabIndex={-1}>
//           {children}
//         </Button>
//       </Link>
//     </li>
//   )
// }
// export default memo(NavProductCategoriesItem)
