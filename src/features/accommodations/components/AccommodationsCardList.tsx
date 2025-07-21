import cabinImageFront from '@/assets/cabinAndYurt/home-cabin-front.webp'
import cabinImageHover from '@/assets/cabinAndYurt/home-cabin-hover.webp'
import yurtImageFront from '@/assets/cabinAndYurt/home-yurt-front.webp'
import yurtImageHover from '@/assets/cabinAndYurt/home-yurt-hover.webp'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { useTranslations } from 'next-intl'
import { AccommodationsCard } from './AccommodationsCard'

export const AccommodationsCardList = () => {
  const t = useTranslations('Home')

  return (
    <div className='flex gap-8 flex-wrap'>
      <AccommodationsCard
        href={PAGE_ROUTES.accommodation.yurt}
        imageOnFront={yurtImageFront}
        imageOnHover={yurtImageHover}
        textContent={t('seeOurYurt')}
      />

      <AccommodationsCard
        href={PAGE_ROUTES.accommodation.cabin}
        imageOnFront={cabinImageFront}
        imageOnHover={cabinImageHover}
        textContent={t('seeOurCabin')}
      />
    </div>
  )
}
