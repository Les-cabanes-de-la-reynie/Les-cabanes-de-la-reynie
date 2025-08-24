'use client'

import Image from 'next/image'
import { useState } from 'react'
import { UploadedImage } from '../shared/uploadImage/_types'
import { AppCarousel } from './AppCarousel'

type CarouselWithLightboxProps = {
  title?: string
  data: UploadedImage[]
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
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        fill
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
