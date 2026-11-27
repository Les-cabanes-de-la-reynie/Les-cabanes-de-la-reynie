import { Link } from '@/i18n/navigation'
import { Heading } from '@/shared/components/Heading'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type ActivitiesCardProps = {
  href: ComponentProps<typeof Link>['href']
  title: string
  image: StaticImageData
  alt: string
}

export const ActivityCard = ({
  href,
  title,
  image,
  alt
}: ActivitiesCardProps) => {
  return (
    <li>
      <Link
        href={href}
        className='group reveal-photo relative flex h-80 flex-col overflow-hidden rounded-xl transition-transform duration-200 ease-out-strong focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink motion-safe:active:scale-[0.99]'
      >
        <Image
          alt={alt}
          src={image}
          placeholder='blur'
          fill
          sizes='(min-width: 1280px) 384px, (min-width: 768px) 33vw, (min-width: 540px) 50vw, calc(100vw - 48px)'
          className='object-cover transition-[scale] duration-700 ease-out-strong motion-safe:group-hover:scale-104'
        />
        <Heading
          level={3}
          className='absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/20 via-55% to-transparent to-80% p-5 text-xl font-semibold leading-tight text-white'
        >
          {title}
        </Heading>
      </Link>
    </li>
  )
}
