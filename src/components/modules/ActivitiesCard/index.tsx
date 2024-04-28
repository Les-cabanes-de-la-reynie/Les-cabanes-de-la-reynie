import Heading from '@/components/elements/Heading'
import { useLocale } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ActivitiesCardProps = {
  title: string
  image: StaticImageData
  alt: string
}

const ActivitiesCard = ({ title, image, alt }: ActivitiesCardProps) => {
  const lang = useLocale()

  const formattedTitle = title.toLocaleLowerCase().split(' ').join('-')

  return (
    <li>
      <Link
        href={`/${lang}/activites/${formattedTitle}`}
        className='group relative flex h-60 flex-col items-center overflow-hidden rounded-lg text-center'
      >
        <Image
          alt={alt}
          src={image}
          placeholder='blur'
          fill
          sizes='(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)'
          className='object-cover'
        />
        <Heading
          level={3}
          className='absolute flex h-full w-full items-end bg-black bg-opacity-20 pb-6 font-bold transition-colors hover:lg:bg-opacity-50'
        >
          <span className='relative inline-block w-full before:absolute before:-inset-1 before:block before:-skew-y-[3deg] before:bg-primary before:transition-all group-hover:lg:before:-inset-10'>
            <span className='relative p-2 text-white'>{title}</span>
          </span>
        </Heading>
      </Link>
    </li>
  )
}
export default ActivitiesCard
