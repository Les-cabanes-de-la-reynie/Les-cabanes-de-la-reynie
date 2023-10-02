import { GetOpeningHours } from '@/lib/OpeningHours'
import OpeningHoursForm from './OpeningHoursForm'

const OpeningHours = async () => {
  const openingHoursData = await GetOpeningHours()

  return (
    <div className='flex flex-1 items-center justify-center'>
      <OpeningHoursForm openingHoursData={openingHoursData} />
    </div>
  )
}
export default OpeningHours
