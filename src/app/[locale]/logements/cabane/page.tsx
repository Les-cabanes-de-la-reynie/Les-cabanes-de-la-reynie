import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import headerImage from '@/components/images/homeCarousel/forest3.webp'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import AccommodationsHeaderContent from '@/components/modules/Accommodations/AccommodationsHeader/AccommodationsHeaderContent'
import AccommodationsHeaderImage from '@/components/modules/Accommodations/AccommodationsHeader/AccommodationsHeaderImage'
import AccommodationsPopover from '@/components/modules/Accommodations/AccommodationsPopover'
import AccommodationsSlider from '@/components/modules/Accommodations/AccommodationsSlider'
import PracticalInformation from '@/components/modules/PracticalInformation'
import { env } from '@/lib/env'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

export async function generateStaticParams() {
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'Common' })

  return {
    title: t('hut')
  }
}

const Hut = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Common')

  const bookList = [
    { title: 'Airbnb', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 2', href: 'https://www.airbnb.fr/' },
    { title: 'Airbnb 3', href: 'https://www.airbnb.fr/' }
  ]

  return (
    <main className='w-full'>
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${t('hut')} landscape`}
            src={headerImage}
            placeholder='blur'
            fill
            className='object-cover'
            priority
          />
        </AccommodationsHeaderImage>
        <AccommodationsHeaderContent>
          <Heading level={1} className='mt-4 lg:mt-0'>
            {t('hut')}
          </Heading>

          <Heading level={2} className='mt-10'>
            {t('description')}
          </Heading>
          <P className='text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            libero pariatur quod sapiente, molestiae incidunt facere qui impedit
            at voluptates ratione, unde, quis tempore quasi reiciendis
            doloribus. Cupiditate, atque animi.
          </P>
          <P className='italic text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            libero pariatur quod sapiente, molestiae incidunt facere qui impedit
            at voluptates ratione, unde, quis tempore quasi reiciendis
            doloribus. Cupiditate, atque animi.
          </P>

          <Heading level={2} className='mt-10'>
            {t('price')}
          </Heading>
          <P>Tarif unique : 175€</P>

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.HutSlider} />
    </main>
  )
}

export default Hut
