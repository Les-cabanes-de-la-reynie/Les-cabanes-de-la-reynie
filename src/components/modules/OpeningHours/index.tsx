import { GetOpeningHours } from 'lib/OpeningHours'
import OpeningHoursTable from './OpeningHoursTable'

const OpeningHours = async () => {
  const openingHoursData = await GetOpeningHours()

  return (
    <div className='flex flex-1 items-center justify-center'>
      <OpeningHoursTable openingHoursData={openingHoursData} />
    </div>
  )
}
export default OpeningHours
