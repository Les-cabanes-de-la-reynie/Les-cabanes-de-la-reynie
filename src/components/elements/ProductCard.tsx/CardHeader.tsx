import Link from 'next/link'
import { cn } from '@/utils/cn'
import CardImage from './CardImage'
import { ProductEntity } from '@/_types/products'
import useTranslation from 'next-translate/useTranslation'

interface CardHeaderProps {
  product: ProductEntity
}

const CardHeader = ({ product }: CardHeaderProps) => {
  const { id, attributes } = product

  const { t, lang } = useTranslation('product')

  return (
    <Link
      href={`/${lang}/products/${id}`}
      className={cn(
        'relative aspect-video select-none overflow-hidden bg-stone-800'
      )}
      title={t('seeMoreDetails')}
    >
      <CardImage image={attributes?.image} />
      {attributes?.new_release && (
        <div className='absolute left-2 top-2 box-border w-max rounded bg-primary px-2 py-1 text-xs text-white'>
          {t('badgeNewReleaseText')}
        </div>
      )}
    </Link>
  )
}
export default CardHeader
