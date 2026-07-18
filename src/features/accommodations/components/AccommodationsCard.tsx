import { Link } from '@/i18n/navigation'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type AccommodationsCardProps = {
  href: ComponentProps<typeof Link>['href']
  imageOnFront: StaticImageData
  imageOnHover: StaticImageData
  altFront: string
  altHover: string
  textContent: string
}

export const AccommodationsCard = ({
  href,
  imageOnFront,
  imageOnHover,
  altFront,
  altHover,
  textContent
}: AccommodationsCardProps) => {
  return (
    <div className='group rounded-lg border-4 w-full h-60 md:h-96 md:max-w-96 border-transparent hover:border-primary duration-500 transition-colors'>
      <Link href={href} className='block h-full'>
        <div className='relative h-full w-full overflow-hidden rounded'>
          <Image
            src={imageOnFront}
            className='object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0'
            alt={altFront}
            fill
            sizes='(max-width: 768px) calc(100vw - 48px), 384px'
          />
          <Image
            src={imageOnHover}
            className='object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'
            alt={altHover}
            fill
            sizes='(max-width: 768px) calc(100vw - 48px), 384px'
          />
          <span className='absolute inset-x-0 bottom-0 flex items-end justify-center rounded-b bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-16 text-xl font-medium text-primary-foreground'>
            {textContent}
          </span>
        </div>
      </Link>
    </div>
  )
}
