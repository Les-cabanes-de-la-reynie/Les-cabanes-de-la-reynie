import { getOpeningHours } from '@/services/queries/openingHours'
import { unstable_noStore } from 'next/cache'
import { OpeningHours } from './OpeningHours'

type OpeningHoursDataProps = {
  editable: boolean
}

export const OpeningHoursData = async ({ editable }: OpeningHoursDataProps) => {
  unstable_noStore()
  const openingHoursData = await getOpeningHours()

  return (
    <OpeningHours
      incomingOpeningHoursData={openingHoursData}
      editable={editable}
    />
  )
}
