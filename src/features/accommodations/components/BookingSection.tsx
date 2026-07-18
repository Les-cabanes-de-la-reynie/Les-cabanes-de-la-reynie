import { Link } from '@/i18n/navigation'
import { AIRBNB_LISTINGS } from '@/shared/_constants/bookings'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/tailwind'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const BookingSection = () => {
  const tCommon = useTranslations('Common')
  const tHome = useTranslations('Home')

  return (
    <Container className='flex flex-col items-center gap-6 text-center'>
      <Heading level={2}>{tCommon('bookYourStay')}</Heading>
      <P className='max-w-prose text-center'>{tHome('bookingText')}</P>
      <div className='flex flex-col items-center gap-3 sm:flex-row'>
        <a
          href={AIRBNB_LISTINGS.yurt}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
        >
          <span>{tCommon('bookOnAirbnb')}</span>
          <ExternalLink className='size-4' aria-hidden='true' />
        </a>
        <Link
          href={PAGE_ROUTES.contact}
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
        >
          {tHome('bookingContact')}
        </Link>
      </div>
    </Container>
  )
}
