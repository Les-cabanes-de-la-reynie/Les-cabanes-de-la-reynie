'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import PopoverCloseButton from '@/components/elements/PopoverCloseButton'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import P from '@/components/elements/P'
import { BookEntity } from './types'

type AccommodationsPopoverProps = {
  bookList: BookEntity[]
}

const AccommodationsPopover = ({ bookList }: AccommodationsPopoverProps) => {
  const t = useTranslations('Accommodations')
  const t2 = useTranslations('Common')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='mt-10 lg:w-max'>
          {t2('bookYourStay')}
          <span className='sr-only'>Book list</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <>
          <P className='mb-2 select-none'>{t('bookList')}</P>
          <Separator className='mb-2' />
          <ul className='flex flex-col gap-2'>
            {bookList?.map(({ title, href }) => (
              <li key={`${title}-${href}`}>
                <Button asChild>
                  <Link href={href} target='_blank'>
                    {title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </>
        <PopoverCloseButton />
      </PopoverContent>
    </Popover>
  )
}
export default AccommodationsPopover
