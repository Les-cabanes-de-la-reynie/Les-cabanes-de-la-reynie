import { Heading } from '@/shared/components/Heading'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type AccommodationsCardProps = {
  href: string
  imageOnFront: StaticImageData
  imageOnHover: StaticImageData
  textContent: string
}

export const AccommodationsCard = ({
  href,
  imageOnFront,
  imageOnHover,
  textContent
}: AccommodationsCardProps) => {
  return (
    <div className='group rounded-lg border-4 w-full h-60 md:h-96 md:max-w-96 border-transparent hover:border-primary duration-500 transition-colors'>
      <Link href={href} className='block h-full'>
        <div className='relative h-full w-full overflow-hidden rounded'>
          <Image
            src={imageOnFront}
            className='object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out'
            alt='TODO'
            fill
            sizes='(max-width: 768px) 100vw, 384px'
          />
          <Image
            src={imageOnHover}
            className='opacity-0 group-hover:opacity-100 object-cover transition-opacity duration-500 ease-in-out'
            alt='TODO'
            fill
            sizes='(max-width: 768px) 100vw, 384px'
          />
          <Heading
            level={2}
            className='flex items-center bg-black/50 rounded text-primary-foreground justify-center h-full w-full absolute top-0 left-0 group-hover:opacity-0 transition-opacity duration-500 ease-in-out'
          >
            {textContent}
          </Heading>
        </div>
      </Link>
    </div>
  )
}
