import hutImageFront from '@/assets/hutAndYurt/home-hut-front.jpg'
import hutImageHover from '@/assets/hutAndYurt/home-hut-hover.jpg'
import yurtImageFront from '@/assets/hutAndYurt/home-yurt-front.jpg'
import yurtImageHover from '@/assets/hutAndYurt/home-yurt-hover.jpg'
import { useTranslations } from 'next-intl'
import { AccommodationsCard } from './AccommodationsCard'

export const AccommodationsCardList = () => {
  const t = useTranslations('Home')

  return (
    <div className='flex gap-8 flex-wrap'>
      <AccommodationsCard
        href={'/logements/yourte'}
        imageOnFront={yurtImageFront}
        imageOnHover={yurtImageHover}
        textContent={t('seeOurYurt')}
      />

      <AccommodationsCard
        href={'/logements/cabane'}
        imageOnFront={hutImageFront}
        imageOnHover={hutImageHover}
        textContent={t('seeOurHut')}
      />
    </div>
  )
}
