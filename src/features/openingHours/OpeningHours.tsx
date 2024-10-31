import { IconContainer } from '@/components/IconContainer'
import { P } from '@/components/P'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useConvertToOpeningHoursRowData } from './application/convertToOpeningHoursRowData'
import { OpeningHoursForm } from './OpeningHoursForm'
import { GetOpeningHours } from './types'

type OpeningHoursProps = {
  incomingOpeningHoursData: GetOpeningHours
  editable: boolean
}

export const OpeningHours = ({
  incomingOpeningHoursData,
  editable
}: OpeningHoursProps) => {
  const t = useTranslations('Contact')

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
            <AlertCircleIcon className='stroke-primary w-5 h-5' />
          </IconContainer>
          <div>
            <P>{t('departuresDescription')}</P>
            <P className='[&:not(:first-child)]:mt-0'>
              {t('arrivalsDescription')}
            </P>
          </div>
        </div>
      )}
    </div>
  )
}
