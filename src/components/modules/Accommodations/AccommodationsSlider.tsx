'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AccommodationsSliderProps } from './types'
import Carousel from '../Carousel'

const AccommodationsSlider = ({ data }: AccommodationsSliderProps) => {
  const t = useTranslations('Common')

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
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      priority
      className='h-60 cursor-pointer rounded-lg object-cover'
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
