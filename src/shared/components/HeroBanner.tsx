import { ClassNameProps } from '@/shared/_types/components'
import { Heading } from '@/shared/components/Heading'
import { cn } from '@/shared/utils/tailwind'
import { ArrowBigDown } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { buttonVariants } from './ui/button'

type HeroBannerProps = PropsWithChildren &
  ClassNameProps & {
    title: string
    callToActionText?: string
  }

export const HeroBanner = ({
  children,
  title,
  callToActionText,
  className
}: HeroBannerProps) => {
  const classes = cn(
    'relative h-[55vh] lg:h-[75vh] w-full select-none overflow-hidden',
    className
  )

  return (
    <div className={classes}>
      {children}
      <div className='absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-12 p-4 text-center'>
        <Heading
          level={1}
          className='text-5xl text-primary-foreground lg:text-6xl'
          data-testid='home-page-main-title'
        >
          {title}
        </Heading>

        {!!callToActionText && (
          <Link
            href='#our-services'
            className={cn(
              'flex gap-2 items-center',
              buttonVariants({ size: 'lg' })
            )}
          >
            <span>{callToActionText}</span>
            <ArrowBigDown className='motion-safe:animate-bounce' />
          </Link>
        )}
      </div>
    </div>
  )
}
