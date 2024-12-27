import { useTranslations } from 'next-intl'
import { TextWithSkewBackgroundColor } from '../TextWithSkewBackgroundColor'
import { OurGourmetOfferItem } from './OurGourmetOfferItem'

export const OurGourmetOfferList = () => {
  const t = useTranslations('Accommodations')

  return (
    <ul className='ml-8 flex flex-col gap-2'>
      <OurGourmetOfferItem>
        <TextWithSkewBackgroundColor>
          {t('ourGourmetOfferImportantItem1')}
        </TextWithSkewBackgroundColor>

        {t('ourGourmetOfferItem1')}
      </OurGourmetOfferItem>

      <OurGourmetOfferItem>
        <TextWithSkewBackgroundColor>
          {t('ourGourmetOfferImportantItem2')}
        </TextWithSkewBackgroundColor>

        {t('ourGourmetOfferItem2')}
      </OurGourmetOfferItem>
    </ul>
  )
}
