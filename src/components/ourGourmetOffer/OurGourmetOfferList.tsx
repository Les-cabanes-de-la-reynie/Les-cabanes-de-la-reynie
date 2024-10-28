import { useTranslations } from 'next-intl'
import { OurGourmetOfferItem } from './OurGourmetOfferItem'
import { OurGourmetOfferStrong } from './OurGourmetOfferStrong'

export const OurGourmetOfferList = () => {
  const t = useTranslations('Accommodations')

  return (
    <ul className='ml-8'>
      <OurGourmetOfferItem>
        <OurGourmetOfferStrong>
          {t('ourGourmetOfferImportantItem1')}
        </OurGourmetOfferStrong>

        {t('ourGourmetOfferItem1')}
      </OurGourmetOfferItem>

      <OurGourmetOfferItem>
        <OurGourmetOfferStrong>
          {t('ourGourmetOfferImportantItem2')}
        </OurGourmetOfferStrong>

        {t('ourGourmetOfferItem2')}
      </OurGourmetOfferItem>
    </ul>
  )
}
