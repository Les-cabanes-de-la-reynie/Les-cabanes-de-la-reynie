import Link from 'next/link'
import { cn } from '@/utils/cn'
import CardImage from './CardImage'
import { ProductEntity } from '@/_types/products'

interface CardHeaderProps {
  product: ProductEntity
}

const CardHeader = ({ product }: CardHeaderProps) => {
  const { id, attributes } = product

  return (
    <Link
      href={`/products/${id}`}
      className={cn(
        'relative h-3/6 w-full select-none overflow-hidden bg-stone-800'
      )}
      title={'See more details'}
    >
      <CardImage image={attributes?.image} />
      {attributes?.new_release && (
        <div className='absolute left-2 top-2 box-border w-max rounded bg-primary px-2 py-1 text-xs text-white md:text-sm'>
          New
        </div>
      )}
    </Link>
  )
}
export default CardHeader
