'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AppCarousel } from './AppCarousel'
import { CarouselImage } from './_types'

type CarouselWithLightboxProps = {
  title?: string
  data: CarouselImage[]
}

export const CarouselWithLightbox = ({
  title,
  data
}: CarouselWithLightboxProps) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  })

  const openLightboxOnSource = (sourceIndex: number) => {
    setLightboxController(prev => ({
      toggler: !prev.toggler,
      sourceIndex
    }))
  }

  const carouselItems = data.map(({ id, imageUrl }, i) => (
    <div
      key={`carousel-${i}-${id}`}
      className='relative h-60 cursor-pointer overflow-hidden rounded-lg bg-popover'
    >
      <Image
        alt={`Our fabulous place ${i}`}
        src={imageUrl}
        sizes='(max-width: 768px) calc(100vw - 48px), (max-width: 1024px) calc(50vw - 48px), 400px'
        fill
        quality={40}
        className='rounded-lg object-cover'
        onClick={() => openLightboxOnSource(i)}
      />
    </div>
  ))

  const lightboxSources = data.map(({ imageUrl }) => imageUrl)

  return (
    <AppCarousel
      carouselItems={carouselItems}
      lightboxSources={lightboxSources}
      lightboxController={lightboxController}
      title={title}
    />
  )
}
