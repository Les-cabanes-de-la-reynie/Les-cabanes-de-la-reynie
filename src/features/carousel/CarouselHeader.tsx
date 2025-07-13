import { Heading } from '@/shared/components/Heading'
import { CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel'
import { useTranslations } from 'next-intl'

type CarouselHeaderProps = {
  title?: string
}

export const CarouselHeader = ({ title }: CarouselHeaderProps) => {
  const t = useTranslations('Carousel')

  return (
    <div className='flex items-center justify-between gap-2'>
      <Heading level={2} className='first:mt-0'>
        {title ?? ''}
      </Heading>

      <div className='flex gap-4'>
        <CarouselPrevious
          variant={'default'}
          aria-label={t('prevButton')}
          data-testid='carousel-previous-button'
        />
        <CarouselNext
          variant={'default'}
          aria-label={t('nextButton')}
          data-testid='carousel-next-button'
        />
      </div>
    </div>
  )
}
