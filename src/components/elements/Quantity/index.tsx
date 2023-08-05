import clsx from 'clsx'
import Button from '../Button'
import { ClassNameProps } from '@/_types/components'

const Quantity = ({ className }: ClassNameProps) => {
  return (
    <Button className={clsx(className, 'w-full rounded-full')}>
      <span className='pr-2'>&#43;</span>
      {'ADD TO CART'}
    </Button>
  )
}
export default Quantity
