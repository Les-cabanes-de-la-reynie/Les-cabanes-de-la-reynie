import { Heading } from '@/shared/components/Heading'
import { useTranslations } from 'next-intl'
import { OpeningHours } from './OpeningHours'

type OpeningHoursSectionProps = {
  editable: boolean
}

export const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
  const tFindUs = useTranslations('FindUs')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {tFindUs('openingHours')}
      </Heading>

      <OpeningHours editable={editable} />
    </section>
  )
}
