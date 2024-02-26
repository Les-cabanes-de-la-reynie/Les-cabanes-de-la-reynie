import { getOpeningHours } from '@/services/queries/openingHours'
import { unstable_noStore } from 'next/cache'
import OpeningHours from '.'

const OpeningHoursData = async () => {
  unstable_noStore()
  const data = await getOpeningHours()

  return <OpeningHours incomingOpeningHoursData={data} />
}
export default OpeningHoursData
