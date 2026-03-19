'use client'

import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { IconContainer } from '@/shared/components/IconContainer'
import { NavigationIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Itinerary = () => {
  const tContact = useTranslations('Contact')

  return (
    <div className='flex flex-col text-primary hover:underline'>
      <span className='flex items-center'>
        <IconContainer>
          <NavigationIcon className={APP_ICON_SIZE_CLASSNAME} />
        </IconContainer>
        {tContact('Itinerary')}
      </span>
    </div>
  )
}
