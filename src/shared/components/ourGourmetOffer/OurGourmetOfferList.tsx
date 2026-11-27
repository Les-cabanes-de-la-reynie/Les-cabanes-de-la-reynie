import { useTranslations } from 'next-intl'
import { TextHighlight } from '../TextHighlight'
import { OurGourmetOfferItem } from './OurGourmetOfferItem'

export const OurGourmetOfferList = () => {
  const t = useTranslations('Accommodations')

  return (
    <ul className='ml-8 flex flex-col gap-2'>
      <OurGourmetOfferItem>
        <TextHighlight>{t('ourGourmetOfferImportantItem1')}</TextHighlight>

        {t('ourGourmetOfferItem1')}
      </OurGourmetOfferItem>

      <OurGourmetOfferItem>
        <TextHighlight>{t('ourGourmetOfferImportantItem2')}</TextHighlight>

        {t('ourGourmetOfferItem2')}
      </OurGourmetOfferItem>
    </ul>
  )
}
