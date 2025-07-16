import { IconContainer } from '@/shared/components/IconContainer'
import { P } from '@/shared/components/P'
import { cn } from '@/shared/utils/tailwind'
import { useSuspenseQuery } from '@tanstack/react-query'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useConvertToOpeningHoursRowData } from './application/convertToOpeningHoursRowData'
import { getOpeningHoursOptions } from './infrastructure/getOpeningHoursOptions'
import { OpeningHoursForm } from './OpeningHoursForm'

type OpeningHoursProps = {
  editable: boolean
}

export const OpeningHours = ({ editable }: OpeningHoursProps) => {
  const t = useTranslations('Contact')

  const { data: incomingOpeningHoursData } = useSuspenseQuery(
    getOpeningHoursOptions
  )

  // eslint-disable-next-line
  const { id, ...rest } = incomingOpeningHoursData

  const openingHoursData = useConvertToOpeningHoursRowData({
    incomingOpeningHoursData: rest
  })

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <OpeningHoursForm
        openingHoursData={openingHoursData}
        editable={editable}
      />

      {!editable && (
        <div className='mt-4 flex'>
          <IconContainer className='mt-1'>
            <AlertCircleIcon className={cn('stroke-primary h-5 w-5')} />
          </IconContainer>
          <div>
            <P>{t('departuresDescription')}</P>
            <P className='not-first:mt-0'>{t('arrivalsDescription')}</P>
          </div>
        </div>
      )}
    </div>
  )
}
