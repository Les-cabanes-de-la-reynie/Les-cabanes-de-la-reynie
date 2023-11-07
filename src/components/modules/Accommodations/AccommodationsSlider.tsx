'use client'

import { useId, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AccommodationsSliderProps } from './types'
import AccommodationsSliderSkeleton from './AccommodationsSliderSkeleton'

const Carousel = dynamic(() => import('@/components/modules/Carousel'), {
  loading: () => <AccommodationsSliderSkeleton />,
  ssr: false
})

const AccommodationsSlider = ({ data }: AccommodationsSliderProps) => {
  const t = useTranslations('Home')

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  })

  const openLightboxOnSource = (sourceIndex: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex
    })
  }

  const uniqueId = useId()

  const carouselItems = data.map((image, i) => (
    <Image
      key={`carousel-${i}-${uniqueId}`}
      alt={`Our fabulous place ${i}`}
      src={image}
      sizes='(min-width: 60em) 24vw,
              (min-width: 28em) 45vw,
              100vw'
      priority
      className='h-60 cursor-pointer object-cover px-2'
      onClick={() => openLightboxOnSource(i)}
    />
  ))
  const lighboxItems = data.map((image, i) => (
    <Image
      key={`lightbox-${i}-${uniqueId}`}
      alt={`Our fabulous place ${i}`}
      src={image}
      sizes='100vw'
      quality={100}
    />
  ))

  return (
    <Carousel
      carouselItems={carouselItems}
      lighboxItems={lighboxItems}
      lightboxController={lightboxController}
      title={t('sliderTitle')}
    />
  )
}
export default AccommodationsSlider
