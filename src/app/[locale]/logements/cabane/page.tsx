import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import headerImage from '@/assets/hutAndYurt/hut-header.jpg'
import { Heading } from '@/components/Heading'
import { OurGourmetOffer } from '@/components/ourGourmetOffer/OurGourmetOffer'
import { P } from '@/components/P'
import { AccommodationsHeader } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/AccommodationsPopover'
import { AccommodationsSlider } from '@/features/accommodations/AccommodationsSlider'
import { AccommodationsPrice } from '@/features/accommodations/gg'
import { AccommodationTypeEnum } from '@/features/accommodations/types'
import { PracticalInformation } from '@/features/common/practicalInformation/PracticalInformation'
import { UploadImageCategoryKeyEnum } from '@/features/common/uploadImage/types'
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
  const tCommon = await getTranslations({ locale, namespace: 'Common' })
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tCommon('hut'),
    description: tSEO('hutDescription'),
    openGraph: {
      title: `${tCommon('hut')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('hutDescription'),
      type: 'website',
      locale: locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/${tCommon('accommodations').toLocaleLowerCase()}/${tCommon('hut').toLocaleLowerCase()}`,
      siteName: ESTABLISHMENT_TITLE,
      images: [
        {
          url: '/hut.jpg',
          width: 1200,
          height: 630
        }
      ]
    }
  }
}

const Hut = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const tCommon = useTranslations('Common')
  const tAccommodations = useTranslations('Accommodations')
  const tHut = useTranslations('Hut')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/z4L2e1aCBHb' }]

  return (
    <main className='w-full'>
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${tCommon('hut')} landscape`}
            src={headerImage}
            placeholder='blur'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
            priority
          />
        </AccommodationsHeaderImage>
        <AccommodationsHeaderContent>
          <Heading level={1} className='mt-4 lg:mt-0'>
            {tCommon('hut')}
          </Heading>

          <Heading level={2} className='mt-10'>
            {tCommon('description')}
          </Heading>
          <P>{tHut('hutP1')}</P>
          <P className='italic'>{tHut('hutP2')}</P>

          <Heading level={2} className='mt-10'>
            {tCommon('price')}
          </Heading>

          <AccommodationsPrice
            accommodationType={AccommodationTypeEnum.HUT}
            description={tAccommodations('averagePrice')}
          />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.HutSlider} />

      <OurGourmetOffer />
    </main>
  )
}

export default Hut
