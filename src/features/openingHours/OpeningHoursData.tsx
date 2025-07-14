import { getOpeningHours } from '@/features/openingHours/infrastructure/getOpeningHours'
import { OpeningHours } from './OpeningHours'

type OpeningHoursDataProps = {
  editable: boolean
}

export const OpeningHoursData = async ({ editable }: OpeningHoursDataProps) => {
  const incomingOpeningHoursData = await getOpeningHours()

  return (
    <OpeningHours
      incomingOpeningHoursData={incomingOpeningHoursData}
      editable={editable}
    />
  )
}
