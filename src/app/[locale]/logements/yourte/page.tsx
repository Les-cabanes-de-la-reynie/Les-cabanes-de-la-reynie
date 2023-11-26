import { unstable_setRequestLocale } from 'next-intl/server'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Accommodations from '@/components/modules/Accommodations'
import { getYourteHeaderImage } from '@/services/queries/images'

const Yourte = async ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  const yourteHeaderImage = await getYourteHeaderImage()
  const lastYourteHeaderImage = yourteHeaderImage.at(-1)

  return (
    <main className='w-full'>
      <AccommodationsHeader
        headerImageUrl={lastYourteHeaderImage?.imageUrl ?? ''}
        title='Yourte'
        bookList={bookList}
      />
      <PracticalInformation />
      <Accommodations />
    </main>
  )
}

export default Yourte
