import { PropsWithChildren } from 'react'

export interface ProductListProps extends PropsWithChildren {}

const ProductList = ({ children }: ProductListProps) => {
  return (
    <ul className='grid grid-cols-2 items-start gap-4 pb-16 md:grid-cols-3 md:gap-8'>
      {children}
    </ul>
  )
}
export default ProductList
