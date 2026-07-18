import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/tailwind'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

type ActivityRoute = ComponentProps<typeof Link>['href']

const ACTIVITY_ROUTES: readonly ActivityRoute[] = [
  PAGE_ROUTES.activity.activity1,
  PAGE_ROUTES.activity.activity2,
  PAGE_ROUTES.activity.activity3
]

type ActivityPagerProps = {
  current: 1 | 2 | 3
}

export const ActivityPager = ({ current }: ActivityPagerProps) => {
  const tActivities = useTranslations('Activities')

  const previous = ACTIVITY_ROUTES[current - 2]
  const next = ACTIVITY_ROUTES[current]

  return (
    <Container>
      <nav
        aria-label={tActivities('allActivities')}
        className='flex w-full flex-wrap items-center justify-between gap-3'
      >
        {previous ? (
          <Link
            href={previous}
            className={cn(buttonVariants({ variant: 'outline' }), 'gap-2')}
          >
            <ArrowLeft aria-hidden='true' />
            {tActivities('previous')}
          </Link>
        ) : (
          <span aria-hidden='true' />
        )}

        <Link
          href={PAGE_ROUTES.activity.home}
          className={buttonVariants({ variant: 'ghost' })}
        >
          {tActivities('allActivities')}
        </Link>

        {next ? (
          <Link
            href={next}
            className={cn(buttonVariants({ variant: 'outline' }), 'gap-2')}
          >
            {tActivities('next')}
            <ArrowRight aria-hidden='true' />
          </Link>
        ) : (
          <span aria-hidden='true' />
        )}
      </nav>
    </Container>
  )
}
