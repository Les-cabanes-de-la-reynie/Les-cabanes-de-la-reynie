import useTranslation from 'next-translate/useTranslation'
import Button from '../Button'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

const Quantity = ({ className }: ClassNameProps) => {
  const { t } = useTranslation('product')

  return (
    <Button
      className={cn('w-full rounded-full px-2 py-1 uppercase', className)}
    >
      <span className='pr-2'>&#43;</span>
      {t('addToCartTextButton')}
    </Button>
  )
}
export default Quantity
