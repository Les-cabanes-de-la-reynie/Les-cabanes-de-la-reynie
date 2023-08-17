import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Maybe, Product, ProductImage } from '@/_types/products'

interface ProductDetailsHeaderProps extends Pick<Product, 'image'> {}

const ProductDetailsHeader = ({ image }: ProductDetailsHeaderProps) => {
  const { t } = useTranslation('product')

  const attributes = image?.data?.attributes as Maybe<ProductImage>

  const imageUrl = attributes?.url
  const alternativeText =
    attributes?.alternativeText ?? t('imageWithoutAlternativeText')

  return (
    <div className='relative h-80 w-full select-none overflow-hidden bg-stone-800 lg:h-full'>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={alternativeText}
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
        />
      )}
    </div>
  )
}
export default ProductDetailsHeader
