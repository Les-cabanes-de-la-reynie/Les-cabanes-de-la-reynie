'use client'

import { useTranslations } from 'next-intl'
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
  const tCarousel = useTranslations('Carousel')
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
    <button
      type='button'
      key={`carousel-${i}-${id}`}
      onClick={() => openLightboxOnSource(i)}
      aria-label={tCarousel('openImage', { number: i + 1 })}
      className='relative block h-60 w-full cursor-pointer overflow-hidden rounded-lg bg-popover focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none'
    >
      <Image
        alt={tCarousel('imageAlt', { number: i + 1 })}
        src={imageUrl}
        sizes='(max-width: 768px) calc(100vw - 48px), (max-width: 1024px) calc(50vw - 48px), 400px'
        fill
        className='rounded-lg object-cover'
      />
    </button>
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
