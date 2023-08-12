import Button from '../Button'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

const Quantity = ({ className }: ClassNameProps) => {
  return (
    <Button className={cn('w-full rounded-full px-2 py-1', className)}>
      <span className='pr-2'>&#43;</span>
      {'ADD TO CART'}
    </Button>
  )
}
export default Quantity
