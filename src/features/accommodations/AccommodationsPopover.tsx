'use client'

import { PopoverCloseButton } from '@/components/PopoverCloseButton'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { BookEntity } from './types'

type AccommodationsPopoverProps = {
  bookList: BookEntity[]
}

export const AccommodationsPopover = ({
  bookList
}: AccommodationsPopoverProps) => {
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
          <span className='mb-2 select-none'>{t('bookList')}</span>
          <Separator className='mb-2' />
          <ul className='flex flex-col gap-2'>
            {bookList?.map(({ title, href }) => (
              <li key={`${title}-${href}`}>
                <Button asChild>
                  <Link href={href} target='_blank' rel='noopener noreferrer'>
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
