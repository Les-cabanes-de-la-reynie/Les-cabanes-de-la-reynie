import { unstable_setRequestLocale } from 'next-intl/server'
import myImg from '../../../../components/images/homeCarousel/forest3.webp'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'

const TentZone = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <main>
      <AccommodationsHeader image={myImg} title='Zone tentes' />
      <PracticalInformation />
    </main>
  )
}

export default TentZone
