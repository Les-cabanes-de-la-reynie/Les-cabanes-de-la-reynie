'use client'

import { DragEvent } from 'react'
import Image from 'next/image'
import fullscreenImage from '../../images/home carousel/forest.jpg'
import fullscreenImage2 from '../../images/home carousel/forest2.jpg'
import fullscreenImage3 from '../../images/home carousel/forest3.jpg'
import fullscreenImage4 from '../../images/home carousel/forest4.jpg'
import fullscreenImage5 from '../../images/home carousel/forest5.jpg'
import fullscreenImage6 from '../../images/home carousel/forest6.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const handleDragStart = (e: DragEvent) => e.preventDefault()

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
}

const items = [
  <Image
    src={fullscreenImage2}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <Image
    src={fullscreenImage3}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <Image
    src={fullscreenImage}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <Image
    src={fullscreenImage4}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <Image
    src={fullscreenImage5}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <Image
    src={fullscreenImage6}
    alt='TODO'
    quality='100'
    priority
    className='h-60 object-cover px-2'
    onDragStart={handleDragStart}
    role='presentation'
  />
]

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      disableButtonsControls={true}
      items={items}
      responsive={responsive}
    />
  )
}
export default Gallery
