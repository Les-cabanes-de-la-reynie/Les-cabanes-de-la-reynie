import { Button } from '@/shared/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

type BookOnAirbnbProps = {
  href: string
}

export const BookOnAirbnb = ({ href }: BookOnAirbnbProps) => {
  const tCommon = useTranslations('Common')

  return (
    <Button asChild className='mt-10 lg:w-max'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {tCommon('bookOnAirbnb')}
        <ExternalLink aria-hidden='true' />
      </a>
    </Button>
  )
}
