import { Heading } from '@/shared/components/Heading'
import { useTranslations } from 'next-intl'
import { OpeningHours } from './OpeningHours'

type OpeningHoursSectionProps = {
  editable: boolean
}

export const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
  const tContact = useTranslations('Contact')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {tContact('openingHours')}
      </Heading>

      <OpeningHours editable={editable} />
    </section>
  )
}
