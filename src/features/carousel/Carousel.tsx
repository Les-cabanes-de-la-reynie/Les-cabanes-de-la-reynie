import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Carousel as EmblaCarousel
} from '@/shared/components/ui/carousel'
import { Progress } from '@/shared/components/ui/progress'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { CarouselHeader } from './CarouselHeader'
import { CarouselProps } from './types'

const FsLightbox = dynamic(() => import('fslightbox-react'))

const Carousel = ({
  carouselItems,
  lighboxItems,
  lightboxController,
  title
}: CarouselProps) => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi>()
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi: CarouselApi) => {
    if (emblaApi) {
      const progress = Math.trunc(emblaApi.scrollProgress() * 100)

      if (progress !== scrollProgress) {
        setScrollProgress(progress)
      }
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)

    return () => {
      emblaApi.destroy()
    }
  }, [emblaApi, onScroll])

  return (
    <div>
      <EmblaCarousel
        setApi={setEmblaApi}
        className='w-full flex flex-col gap-3'
      >
        <CarouselHeader title={title} />

        <CarouselContent className='ml-0'>
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem
              key={`${carouselItem.key}-${index}`}
              className='px-4 md:basis-1/2 lg:basis-1/3 select-none'
            >
              {carouselItem}
            </CarouselItem>
          ))}
        </CarouselContent>

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
