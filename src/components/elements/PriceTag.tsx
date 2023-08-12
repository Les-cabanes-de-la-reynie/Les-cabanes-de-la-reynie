import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'
import { Product } from '@/_types/products'
import { formatNumberToPrice } from '@/utils/formatNumberToprice'

export interface PriceTagProps extends ClassNameProps, Pick<Product, 'price'> {}

const PriceTag = ({ price, className = '' }: PriceTagProps) => {
  return (
    <span className={cn('flex font-bold', className)}>
      {price && formatNumberToPrice(price)}
    </span>
  )
}
export default PriceTag
