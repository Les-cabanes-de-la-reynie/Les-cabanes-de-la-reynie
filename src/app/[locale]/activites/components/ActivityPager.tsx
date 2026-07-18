import forest2 from '@/assets/homeCarousel/forest2.webp'
import forest4 from '@/assets/homeCarousel/forest4.webp'
import forest5 from '@/assets/homeCarousel/forest5.webp'
import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/tailwind'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type ActivityRoute = ComponentProps<typeof Link>['href']

type ActivityRef = {
  href: ActivityRoute
  image: StaticImageData
  titleKey: '1' | '2' | '3'
}

const ACTIVITIES: readonly ActivityRef[] = [
  { href: PAGE_ROUTES.activity.activity1, image: forest2, titleKey: '1' },
  { href: PAGE_ROUTES.activity.activity2, image: forest5, titleKey: '2' },
  { href: PAGE_ROUTES.activity.activity3, image: forest4, titleKey: '3' }
]

type PagerCardProps = {
  activity: ActivityRef
  direction: 'previous' | 'next'
}

const PagerCard = ({ activity, direction }: PagerCardProps) => {
  const tActivities = useTranslations('Activities')
  const tSEO = useTranslations('SEO')

  return (
    <Link
      href={activity.href}
      className={cn(
        'group relative flex h-28 overflow-hidden rounded-lg border-4 border-transparent transition-colors duration-500 hover:border-primary focus-visible:border-primary focus-visible:outline-none',
        direction === 'next' && 'sm:col-start-2'
      )}
    >
      <Image
        src={activity.image}
        alt=''
        fill
        sizes='(max-width: 640px) calc(100vw - 48px), 440px'
        className='rounded object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105'
      />
      <span
        className={cn(
          'relative flex w-full flex-col justify-center gap-1 rounded bg-gradient-to-r from-black/75 via-black/45 to-black/20 px-4 text-primary-foreground',
          direction === 'next' && 'items-end bg-gradient-to-l text-right'
        )}
      >
        <span className='flex items-center gap-1 text-sm text-primary-foreground/80'>
          {direction === 'previous' && <ArrowLeft aria-hidden='true' className='size-4' />}
          {tActivities(direction)}
          {direction === 'next' && <ArrowRight aria-hidden='true' className='size-4' />}
        </span>
        <span className='line-clamp-2 text-balance text-sm font-medium'>
          {tSEO(`activity.${activity.titleKey}.title`)}
        </span>
      </span>
    </Link>
  )
}

type ActivityPagerProps = {
  current: 1 | 2 | 3
}

export const ActivityPager = ({ current }: ActivityPagerProps) => {
  const tActivities = useTranslations('Activities')

  const previous = ACTIVITIES[current - 2]
  const next = ACTIVITIES[current]

  return (
    <Container>
      <nav
        aria-label={tActivities('allActivities')}
        className='flex w-full flex-col gap-3'
      >
        <div className='grid gap-3 sm:grid-cols-2'>
          {!!previous && <PagerCard activity={previous} direction='previous' />}
          {!!next && <PagerCard activity={next} direction='next' />}
        </div>
        <Link
          href={PAGE_ROUTES.activity.home}
          className={cn(buttonVariants({ variant: 'ghost' }), 'self-center')}
        >
          {tActivities('allActivities')}
        </Link>
      </nav>
    </Container>
  )
}
