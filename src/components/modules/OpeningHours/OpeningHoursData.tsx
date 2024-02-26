import { getOpeningHours } from '@/services/queries/openingHours'
import OpeningHours from '.'

const OpeningHoursData = async () => {
  const data = await getOpeningHours()

  return <OpeningHours incomingOpeningHoursData={data} />
}
export default OpeningHoursData
