import { unstable_setRequestLocale } from 'next-intl/server'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import myImg from '../../../../components/images/homeCarousel/forest6.webp'
import PracticalInformation from '@/components/modules/PracticalInformation'

const Yourte = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <main>
      <AccommodationsHeader image={myImg} title='Yourte' />
      <PracticalInformation />
    </main>
  )
}

export default Yourte
