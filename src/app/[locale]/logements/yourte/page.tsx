import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { AccommodationTypeEnum } from '@/_types/accommodations'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import headerImage from '@/components/images/hutAndYurt/yourt-header.jpg'
import AccommodationsHeader from '@/components/modules/Accommodations/AccommodationsHeader'
import AccommodationsHeaderContent from '@/components/modules/Accommodations/AccommodationsHeader/AccommodationsHeaderContent'
import AccommodationsHeaderImage from '@/components/modules/Accommodations/AccommodationsHeader/AccommodationsHeaderImage'
import AccommodationsPopover from '@/components/modules/Accommodations/AccommodationsPopover'
import AccommodationsPrice from '@/components/modules/Accommodations/AccommodationsPrice'
import AccommodationsSlider from '@/components/modules/Accommodations/AccommodationsSlider'
import OurGourmetOffer from '@/components/modules/OurGourmetOffer'
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
  const tCommon = await getTranslations({ locale, namespace: 'Common' })
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tCommon('yurt'),
    description: tSEO('yurtDescription'),
    openGraph: {
      title: tCommon('yurt'),
      description: tSEO('yurtDescription'),
      type: 'website',
      locale: locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/${tCommon('accommodations').toLocaleLowerCase()}/${tCommon('yurt').toLocaleLowerCase()}`,
      siteName: ESTABLISHMENT_TITLE
    }
  }
}

const Yurt = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const tCommon = useTranslations('Common')
  const tAccommodations = useTranslations('Accommodations')
  const tYurt = useTranslations('Yurt')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/5guTmU7BBHb' }]

  return (
    <main className='w-full'>
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${tCommon('yurt')} landscape`}
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
            {tCommon('yurt')}
          </Heading>

          <Heading level={2} className='mt-10'>
            {tCommon('description')}
          </Heading>
          <P>{tYurt('yurtP1')}</P>
          <P className='italic'>{tYurt('yurtP2')}</P>

          <Heading level={2} className='mt-10'>
            {tCommon('price')}
          </Heading>

          <AccommodationsPrice
            accommodationType={AccommodationTypeEnum.YURT}
            description={tAccommodations('averagePrice')}
          />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.YurtSlider} />

      <OurGourmetOffer />
    </main>
  )
}

export default Yurt
