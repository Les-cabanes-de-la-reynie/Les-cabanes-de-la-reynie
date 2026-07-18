import { BookingLinks } from '@/features/accommodations/components/BookingLinks'
import { Link } from '@/i18n/navigation'
import { YURT_BOOK_LIST } from '@/shared/_constants/bookings'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { buttonVariants } from '@/shared/components/ui/button'
import { useTranslations } from 'next-intl'

export const BookingSection = () => {
  const tCommon = useTranslations('Common')
  const tHome = useTranslations('Home')

  return (
    <Container className='flex flex-col items-center gap-6 text-center'>
      <Heading level={2}>{tCommon('bookYourStay')}</Heading>
      <P className='max-w-prose text-center'>{tHome('bookingText')}</P>
      <div className='flex flex-col items-center gap-3 sm:flex-row'>
        <BookingLinks bookList={YURT_BOOK_LIST} />
        <Link
          href={PAGE_ROUTES.contact}
          className={buttonVariants({ variant: 'outline' })}
        >
          {tHome('bookingContact')}
        </Link>
      </div>
    </Container>
  )
}
