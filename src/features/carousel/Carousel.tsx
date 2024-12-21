import { Heading } from '@/components/Heading'
import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as EmblaCarousel
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { CarouselProps } from './types'

const FsLightbox = dynamic(() => import('fslightbox-react'))

const SLIDER_BUTTONS_COMMON_CLASSNAME =
  'h-10 w-10 absolute -top-9 flex items-center justify-center rounded-full p-0'

const Carousel = ({
  carouselItems,
  lighboxItems,
  lightboxController,
  title
}: CarouselProps) => {
  const t = useTranslations('Carousel')

  const [emblaApi, setEmblaApi] = useState<CarouselApi>()
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi: CarouselApi) => {
    if (emblaApi) {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
      setScrollProgress(progress * 100)
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className='relative mt-7'>
      <Heading level={2} className='first:mt-0 -top-[3.4rem] left-0 absolute'>
        {title ?? ''}
      </Heading>

      <EmblaCarousel
        setApi={setEmblaApi}
        className='w-full'
        opts={{
          align: 'start'
        }}
      >
        <CarouselContent className='ml-0'>
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem
              key={`${carouselItem.key}-${index}`}
              className='px-4 md:basis-1/2 lg:basis-1/3'
            >
              {carouselItem}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={'default'}
          className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} left-[unset] right-14`}
          aria-label={t('prevButton')}
          data-testid='carousel-previous-button'
        />
        <CarouselNext
          variant={'default'}
          className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} right-0`}
          aria-label={t('nextButton')}
          data-testid='carousel-next-button'
        />
        <Progress
          value={scrollProgress}
          className='mt-4 w-2/3 lg:w-2/6 mx-auto'
        />
      </EmblaCarousel>

      {lighboxItems?.length ? (
        <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          sources={lighboxItems}
        />
      ) : null}
    </div>
  )
}

export default Carousel
