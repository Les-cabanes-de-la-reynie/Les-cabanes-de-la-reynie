import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../../../../i18n.config'
import Heading from '@/components/elements/Heading'
import Location from '@/components/modules/Location'
import OpeningTimes from '@/components/modules/OpeningTimes'

export default async function Restaurants({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { Restaurants } = await getDictionary(lang)

  return (
    <div className='container mb-8 w-full'>
      <Heading level={1} className='my-8'>
        {Restaurants.restaurantsMainTitle}
      </Heading>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <section className='flex w-full flex-col gap-4 lg:mb-0'>
          <Heading level={2}>{Restaurants.location}</Heading>
          <Location />
        </section>
        <section className='flex w-full flex-col gap-4 lg:mb-0'>
          <Heading level={2}>{Restaurants.openingTimes}</Heading>
          <OpeningTimes lang={lang} />
        </section>
      </div>
    </div>
  )
}
