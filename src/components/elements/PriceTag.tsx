import clsx from 'clsx'
import { ClassNameProps } from '@/_types/components'
import { Product } from '@/_types/products'
import { formatNumberToPrice } from '@/utils/formatNumberToprice'

export interface PriceTagProps extends ClassNameProps, Pick<Product, 'price'> {}

const PriceTag = ({ price, className = '' }: PriceTagProps) => {
  return (
    <span className={clsx(className, 'flex font-bold')}>
      {price && formatNumberToPrice(price)}
    </span>
  )
}
export default PriceTag
