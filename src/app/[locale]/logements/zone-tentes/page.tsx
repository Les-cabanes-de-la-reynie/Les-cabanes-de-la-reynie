import { unstable_setRequestLocale } from 'next-intl/server'
import myImg from '../../../../components/images/homeCarousel/forest3.webp'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Accommodations from '@/components/modules/Accommodations'

const TentZone = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  return (
    <main className='w-full'>
      <AccommodationsHeader
        image={myImg}
        title='Zone tentes'
        bookList={bookList}
      />
      <PracticalInformation />
      <Accommodations />
    </main>
  )
}

export default TentZone
