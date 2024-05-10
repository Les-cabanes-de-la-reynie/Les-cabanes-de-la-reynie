import Heading from '@/components/elements/Heading'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type AccommodationsCardProps = {
  href: string
  imageOnFront: StaticImageData
  imageOnHover: StaticImageData
  textContent: string
}

const AccommodationsCard = ({
  href,
  imageOnFront,
  imageOnHover,
  textContent
}: AccommodationsCardProps) => {
  return (
    <div className='group rounded-lg border-2 w-full h-60 md:h-full md:max-w-max border-transparent hover:border-accent duration-500 transition-colors'>
      <Link href={href}>
        <div className='relative h-full'>
          <Image
            src={imageOnFront}
            className='h-full w-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out'
            alt='TODO'
            width={384}
            height={384}
          />
          <Image
            src={imageOnHover}
            className='h-full w-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out'
            alt='TODO'
            width={384}
            height={384}
          />
          <Heading
            level={2}
            className='flex items-center justify-center bg-black h-full w-full absolute top-0 left-0 bg-opacity-50'
          >
            {textContent}
          </Heading>
        </div>
      </Link>
    </div>
  )
}
export default AccommodationsCard
