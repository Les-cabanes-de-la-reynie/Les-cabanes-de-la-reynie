import { GetOpeningHours } from '@/lib/OpeningHours'
import OpeningHoursTable from './OpeningHoursTable'
import OpeningHoursForm from './Edit/OpeningHoursForm'

interface OpeningHoursProps {
  isEditable?: boolean
}

const OpeningHours = async ({ isEditable = false }: OpeningHoursProps) => {
  const openingHoursData = await GetOpeningHours()

  return (
    <div className='flex flex-1 items-center justify-center'>
      {isEditable ? (
        <OpeningHoursForm openingHoursData={openingHoursData} />
      ) : (
        <OpeningHoursTable openingHoursData={openingHoursData} />
      )}
    </div>
  )
}
export default OpeningHours
