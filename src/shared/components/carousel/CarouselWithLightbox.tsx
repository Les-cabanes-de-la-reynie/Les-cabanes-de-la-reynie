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
        className='rounded-lg object-cover'
        onClick={() => openLightboxOnSource(i)}
      />
    </div>
  ))

  // Serve the lightbox through the image optimizer instead of raw originals
  const lightboxSources = data.map(
    ({ imageUrl }) => `/_next/image?url=${encodeURIComponent(imageUrl)}&w=2048&q=75`
  )

  return (
    <AppCarousel
      carouselItems={carouselItems}
      lightboxSources={lightboxSources}
      lightboxController={lightboxController}
      title={title}
    />
  )
}
