import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import {
  Carousel as EmblaCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Heading from '@/components/elements/Heading'
import { CarouselProps } from './types'

const FsLightbox = dynamic(() => import('fslightbox-react'))

const SLIDER_BUTTONS_COMMON_CLASSNAME =
  'absolute -top-8 flex h-10 w-10 items-center text-primary-foreground justify-center rounded-full p-0 bg-primary'

const Carousel = ({
  carouselItems,
  lighboxItems,
  lightboxController,
  title = ''
}: CarouselProps) => {
  const t = useTranslations('Carousel')

  return (
    <>
      {!!title && (
        <Heading level={2} className='mb-2 pl-4 pr-24'>
          {title}
        </Heading>
      )}
      <EmblaCarousel
        className='w-full px-2'
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <CarouselContent>
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem
              key={`${carouselItem.key}-${index}`}
              className='md:basis-1/2 lg:basis-1/3'
            >
              {carouselItem}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} left-[unset] right-14`}
          aria-label={t('prevButton')}
        />
        <CarouselNext
          className={`${SLIDER_BUTTONS_COMMON_CLASSNAME} right-2`}
          aria-label={t('nextButton')}
        />
      </EmblaCarousel>

      {lighboxItems?.length ? (
        <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          sources={lighboxItems}
        />
      ) : null}
    </>
  )
}
export default Carousel
