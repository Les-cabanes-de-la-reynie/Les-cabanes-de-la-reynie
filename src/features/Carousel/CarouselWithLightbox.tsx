'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import {
  UploadImageCategoryKeyEnum,
  UploadImageEntity
} from '../common/uploadImage/types'
import Carousel from './Carousel'

type CarouselWithLightboxProps = {
  data: UploadImageEntity[]
  category: UploadImageCategoryKeyEnum
}

export const CarouselWithLightbox = ({
  data,
  category
}: CarouselWithLightboxProps) => {
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
  const lighboxItems = data.map(({ id, imageUrl }, i) => (
    <Image
      key={`lightbox-${i}-${id}`}
      alt={`Our fabulous place ${i}`}
      src={imageUrl}
      width='0'
      height='0'
      sizes='100vw'
      className='h-auto w-full'
      quality={100}
    />
  ))

  return (
    <Carousel
      carouselItems={carouselItems}
      lighboxItems={lighboxItems}
      lightboxController={lightboxController}
      title={
        category === UploadImageCategoryKeyEnum.HomeSlider
          ? t('sliderTitle')
          : undefined
      }
    />
  )
}
