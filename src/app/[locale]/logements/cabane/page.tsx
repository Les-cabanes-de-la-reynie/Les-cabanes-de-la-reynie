import { unstable_setRequestLocale } from 'next-intl/server'
import myImg from '../../../../components/images/homeCarousel/forest5.webp'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Accommodations from '@/components/modules/Accommodations'

const Cabane = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  return (
    <main className='w-full'>
      <AccommodationsHeader
        headerImageUrl={myImg}
        title='Cabane'
        bookList={bookList}
      />
      <PracticalInformation />
      <Accommodations />
    </main>
  )
}

export default Cabane
