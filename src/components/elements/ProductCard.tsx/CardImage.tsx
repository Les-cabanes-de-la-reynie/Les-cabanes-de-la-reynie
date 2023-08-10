import Image from 'next/image'
import { Product, Maybe, ProductImage } from '@/_types/products'

const CardImage = ({ image }: Pick<Product, 'image'>) => {
  const attributes = image?.data?.attributes as Maybe<ProductImage>

  const imageUrl = attributes?.url
  const alternativeText = attributes?.alternativeText ?? '' // TODO : translate Cette image ne contient pas de texte alternative

  return (
    imageUrl && (
      <figure className='absolute inset-0'>
        <Image
          src={imageUrl}
          alt={alternativeText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          quality='85'
          priority
          className='object-cover'
        />
      </figure>
    )
  )
}
export default CardImage
