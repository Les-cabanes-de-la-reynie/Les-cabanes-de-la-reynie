import { Link } from '@/i18n/navigation'
import { cn } from '@/shared/utils/tailwind'
import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type PhotoLinkBannerProps = {
  href: ComponentProps<typeof Link>['href']
  image: StaticImageData
  imageAlt: string
  title: string
  kicker?: string
  className?: string
  imageClassName?: string
}

export const PhotoLinkBanner = ({
  href,
  image,
  imageAlt,
  title,
  kicker,
  className,
  imageClassName
}: PhotoLinkBannerProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'group reveal-photo relative block h-56 w-full overflow-hidden rounded-xl transition-transform duration-200 ease-out-strong focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink motion-safe:active:scale-[0.99] md:h-72',
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes='(max-width: 768px) calc(100vw - 48px), 896px'
        className={cn(
          'object-cover transition-[scale] duration-700 ease-out-strong motion-safe:group-hover:scale-104',
          imageClassName
        )}
      />
      <span className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/70 to-transparent px-5 pb-4 pt-16 text-primary-foreground'>
        <span className='flex flex-col gap-1'>
          {!!kicker && (
            <span className='text-sm text-primary-foreground/80'>{kicker}</span>
          )}
          <span className='text-balance text-xl font-semibold md:text-2xl'>
            {title}
          </span>
        </span>
        <ArrowRight
          aria-hidden='true'
          className='mb-1 shrink-0 transition-[translate] duration-300 ease-out-strong motion-safe:group-hover:translate-x-1'
        />
      </span>
    </Link>
  )
}
