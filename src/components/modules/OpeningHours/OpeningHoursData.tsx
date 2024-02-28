import { getOpeningHours } from '@/services/queries/openingHours'
import { unstable_noStore } from 'next/cache'
import OpeningHours from '.'

type OpeningHoursDataProps = {
  editable: boolean
}

const OpeningHoursData = async ({ editable }: OpeningHoursDataProps) => {
  unstable_noStore()
  const openingHoursData = await getOpeningHours()

  return (
    <OpeningHours
      incomingOpeningHoursData={openingHoursData}
      editable={editable}
    />
  )
}
export default OpeningHoursData
