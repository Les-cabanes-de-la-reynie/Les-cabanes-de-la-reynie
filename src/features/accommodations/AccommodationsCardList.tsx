import cabinImageFront from '@/assets/cabinAndYurt/home-cabin-front.jpg'
import cabinImageHover from '@/assets/cabinAndYurt/home-cabin-hover.jpg'
import yurtImageFront from '@/assets/cabinAndYurt/home-yurt-front.jpg'
import yurtImageHover from '@/assets/cabinAndYurt/home-yurt-hover.jpg'
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
        imageOnFront={cabinImageFront}
        imageOnHover={cabinImageHover}
        textContent={t('seeOurCabin')}
      />
    </div>
  )
}
