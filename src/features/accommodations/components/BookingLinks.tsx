import { BookEntity } from '@/shared/_types/booking'
import { ClassNameProps } from '@/shared/_types/components'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/tailwind'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

type BookingLinksProps = ClassNameProps & {
  bookList: BookEntity[]
  label?: string
}

export const BookingLinks = ({
  bookList,
  label,
  className
}: BookingLinksProps) => {
  const tCommon = useTranslations('Common')

  return (
    <ul className={cn('flex flex-wrap items-center gap-3', className)}>
      {bookList.map(({ title, href }) => (
        <li key={`${title}-${href}`}>
          <Button asChild>
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {label ?? tCommon('bookOn', { platform: title })}
              <ExternalLink aria-hidden='true' />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}
