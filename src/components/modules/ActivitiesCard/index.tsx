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

  return (
    <li>
      <Link
        href={`/${lang}/activites/${title.toLocaleLowerCase().split(' ').join('-')}`}
        className='group relative flex h-60 flex-col items-center overflow-hidden rounded-lg text-center text-muted-foreground'
      >
        <Image
          alt={alt}
          src={image}
          placeholder='blur'
          fill
          sizes='(max-width: 475px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1200px) 25vw'
          className='object-cover'
        />
        <Heading
          level={3}
          className='absolute flex h-full w-full items-end bg-black bg-opacity-20 pb-4 font-bold transition-colors hover:lg:bg-opacity-50'
        >
          <span className='relative inline-block w-full before:absolute before:inset-0 before:block before:-skew-y-[4deg] before:bg-primary before:transition-all group-hover:lg:before:-inset-10 group-hover:lg:before:bg-primary-dark'>
            <span className='relative p-2 text-white'>{title}</span>
          </span>
        </Heading>
      </Link>
    </li>
  )
}
export default ActivitiesCard
