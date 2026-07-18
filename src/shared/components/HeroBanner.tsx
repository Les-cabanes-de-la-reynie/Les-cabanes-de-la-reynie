import { ClassNameProps } from '@/shared/_types/components'
import { Heading } from '@/shared/components/Heading'
import { cn } from '@/shared/utils/tailwind'
import { ArrowDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { buttonVariants } from './ui/button'

type HeroBannerProps = PropsWithChildren &
  ClassNameProps & {
    title: string
    subtitle?: string
    callToActionText?: string
    bookingHref?: string
    bookingText?: string
  }

export const HeroBanner = ({
  children,
  title,
  subtitle,
  callToActionText,
  bookingHref,
  bookingText,
  className
}: HeroBannerProps) => {
  const classes = cn(
    'relative h-[55vh] lg:h-[75vh] w-full overflow-hidden',
    className
  )

  return (
    <div className={classes}>
      {children}
      <div className='absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-12 p-4 text-center'>
        <div className='flex flex-col items-center gap-4'>
          <Heading
            level={1}
            className='text-5xl text-primary-foreground lg:text-6xl'
            data-testid='home-page-main-title'
          >
            {title}
          </Heading>
          {!!subtitle && (
            <p className='max-w-2xl text-balance text-lg text-primary-foreground/90 lg:text-xl'>
              {subtitle}
            </p>
          )}
        </div>

        {(!!bookingHref || !!callToActionText) && (
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            {!!bookingHref && !!bookingText && (
              <a
                href={bookingHref}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
              >
                <span>{bookingText}</span>
                <ExternalLink className='size-4' aria-hidden='true' />
              </a>
            )}
            {!!callToActionText && (
              <Link
                href='#our-services'
                className={cn(
                  buttonVariants({
                    variant: bookingHref ? 'outline' : 'default',
                    size: 'lg'
                  }),
                  'flex items-center gap-2',
                  bookingHref &&
                    'border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'
                )}
              >
                <span>{callToActionText}</span>
                <ArrowDown aria-hidden='true' />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
