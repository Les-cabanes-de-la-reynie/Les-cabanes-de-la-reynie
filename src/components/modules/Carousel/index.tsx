import Heading from '@/components/elements/Heading'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as EmblaCarousel
} from '@/components/ui/carousel'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { CarouselProps } from './types'

const FsLightbox = dynamic(() => import('fslightbox-react'))

const SLIDER_BUTTONS_COMMON_CLASSNAME =
  'h-10 w-10 absolute -top-8 flex items-center justify-center rounded-full p-0'

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
        className='w-full'
        opts={{
          align: 'start',
          loop: true
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
        />
        <CarouselNext
          variant={'default'}
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
