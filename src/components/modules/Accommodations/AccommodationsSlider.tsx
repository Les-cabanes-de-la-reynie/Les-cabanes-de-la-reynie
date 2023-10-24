'use client'

import { useId, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { AccommodationsSliderProps } from './types'
import AccommodationsSliderSkeleton from './AccommodationsSliderSkeleton'

const Carousel = dynamic(() => import('components/modules/Carousel'), {
  loading: () => <AccommodationsSliderSkeleton />,
  ssr: false
})

const AccommodationsSlider = ({ data }: AccommodationsSliderProps) => {
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
      src={image}
      alt='TODO'
      quality='100'
      priority
      className='h-60 cursor-pointer object-cover px-2'
      onClick={() => openLightboxOnSource(i)}
      role='presentation'
    />
  ))
  const lighboxItems = data.map((image, i) => (
    <Image
      key={`lightbox-${i}-${uniqueId}`}
      src={image}
      alt='TODO'
      quality='100'
      priority
    />
  ))

  return (
    <Carousel
      carouselItems={carouselItems}
      lighboxItems={lighboxItems}
      lightboxController={lightboxController}
      title='Mon super titre'
    />
  )
}
export default AccommodationsSlider
