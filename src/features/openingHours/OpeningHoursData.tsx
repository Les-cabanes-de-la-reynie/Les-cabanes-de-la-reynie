import { getOpeningHours } from '@/features/openingHours/infrastructure/getOpeningHours'
import { unstable_noStore } from 'next/cache'
import { OpeningHours } from './OpeningHours'

type OpeningHoursDataProps = {
  editable: boolean
}

export const OpeningHoursData = async ({ editable }: OpeningHoursDataProps) => {
  unstable_noStore()

  const incomingOpeningHoursData = await getOpeningHours()

  return (
    <OpeningHours
      incomingOpeningHoursData={incomingOpeningHoursData}
      editable={editable}
    />
  )
}
