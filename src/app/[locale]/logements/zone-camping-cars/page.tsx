import { unstable_setRequestLocale } from 'next-intl/server'
import myImg from '../../../../components/images/homeCarousel/forest4.webp'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'

const CampingCarsZone = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)

  return (
    <main>
      <AccommodationsHeader image={myImg} title='Zone camping cars' />
      <PracticalInformation />
    </main>
  )
}

export default CampingCarsZone
