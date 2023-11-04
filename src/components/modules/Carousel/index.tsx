'use client'

import FsLightbox from 'fslightbox-react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Heading from '@/components/elements/Heading'
import { CarouselProps } from './types'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

const responsive = {
  0: { items: 1 },
  640: { items: 2 },
  1024: { items: 3 }
}

const SLIDER_BUTTONS_COMMON_CLASSNAME =
  'absolute -top-12 flex h-10 w-10 items-center text-primary-foreground justify-center rounded-full p-0 bg-primary'

const Carousel = ({
  carouselItems,
  lighboxItems,
  lightboxController,
  title = ''
}: CarouselProps) => {
  const t = useTranslations('Carousel')

  const renderPrevButton = ({ isDisabled = false }) => {
    return (
      <Button
        variant='ghost'
        className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} right-14`}
        disabled={isDisabled}
        aria-label={t('prevButton')}
      >
        <ChevronLeftIcon />
      </Button>
    )
  }
  const renderNextButton = ({ isDisabled = false }) => {
    return (
      <Button
        variant='ghost'
        className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} right-2`}
        disabled={isDisabled}
        aria-label={t('nextButton')}
      >
        <ChevronRightIcon />
      </Button>
    )
  }

  return (
    <>
      {!!title && (
        <Heading level={2} className='mb-2 pl-4 pr-24'>
          {title}
        </Heading>
      )}
      <AliceCarousel
        responsive={responsive}
        infinite
        disableSlideInfo={false}
        disableDotsControls
        keyboardNavigation
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={carouselItems}
      />
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={lighboxItems}
      />
    </>
  )
}
export default Carousel
