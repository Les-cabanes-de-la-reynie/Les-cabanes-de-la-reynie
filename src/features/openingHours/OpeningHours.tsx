'use client'

import { IconContainer } from '@/shared/components/IconContainer'
import { P } from '@/shared/components/P'
import { convertDateToTime } from '@/shared/utils/date'
import { cn } from '@/shared/utils/tailwind'
import { useSuspenseQuery } from '@tanstack/react-query'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getOpeningHoursOptions } from './infrastructure/getOpeningHoursOptions'
import { OpeningHoursForm } from './OpeningHoursForm'

type OpeningHoursProps = {
  editable: boolean
}

export const OpeningHours = ({ editable }: OpeningHoursProps) => {
  const tContact = useTranslations('Contact')

  const { data: incomingOpeningHoursData } = useSuspenseQuery(
    getOpeningHoursOptions
  )

  const openingHoursFormData = {
    mondayStart: convertDateToTime(incomingOpeningHoursData.mondayStart),
    mondayEnd: convertDateToTime(incomingOpeningHoursData.mondayEnd),
    tuesdayStart: convertDateToTime(incomingOpeningHoursData.tuesdayStart),
    tuesdayEnd: convertDateToTime(incomingOpeningHoursData.tuesdayEnd),
    wednesdayStart: convertDateToTime(incomingOpeningHoursData.wednesdayStart),
    wednesdayEnd: convertDateToTime(incomingOpeningHoursData.wednesdayEnd),
    thursdayStart: convertDateToTime(incomingOpeningHoursData.thursdayStart),
    thursdayEnd: convertDateToTime(incomingOpeningHoursData.thursdayEnd),
    fridayStart: convertDateToTime(incomingOpeningHoursData.fridayStart),
    fridayEnd: convertDateToTime(incomingOpeningHoursData.fridayEnd),
    saturdayStart: convertDateToTime(incomingOpeningHoursData.saturdayStart),
    saturdayEnd: convertDateToTime(incomingOpeningHoursData.saturdayEnd),
    sundayStart: convertDateToTime(incomingOpeningHoursData.sundayStart),
    sundayEnd: convertDateToTime(incomingOpeningHoursData.sundayEnd)
  }

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <OpeningHoursForm
        openingHoursFormData={openingHoursFormData}
        editable={editable}
      />

      {!editable && (
        <div className='mt-4 flex'>
          <IconContainer className='mt-1'>
            <AlertCircleIcon className={cn('stroke-primary h-5 w-5')} />
          </IconContainer>
          <div>
            <P>{tContact('departuresDescription')}</P>
            <P className='not-first:mt-0'>{tContact('arrivalsDescription')}</P>
          </div>
        </div>
      )}
    </div>
  )
}
