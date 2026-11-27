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
    size?: 'display' | 'page'
  }

export const HeroBanner = ({
  children,
  title,
  subtitle,
  callToActionText,
  bookingHref,
  bookingText,
  size = 'page',
  className
}: HeroBannerProps) => {
  const classes = cn(
    'relative h-[55vh] w-full overflow-hidden lg:h-[75vh] motion-safe:[&>img]:animate-hero-settle',
    className
  )

  return (
    <div className={classes}>
      {children}
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-12 bg-black/30 p-4 text-center'>
        <div className='flex flex-col items-center gap-4 motion-safe:*:animate-rise-in motion-safe:[&>p]:[animation-delay:120ms]'>
          <Heading
            level={1}
            className={cn(
              'text-primary-foreground',
              size === 'display'
                ? 'text-display'
                : 'max-w-[24ch] text-[clamp(2rem,1.4rem+2vw,3.25rem)] leading-[1.1]'
            )}
            data-testid='home-page-main-title'
          >
            {title}
          </Heading>
          {!!subtitle && (
            <p className='max-w-2xl text-balance text-lead text-primary-foreground/90'>
              {subtitle}
            </p>
          )}
        </div>

        {(!!bookingHref || !!callToActionText) && (
          <div className='flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center motion-safe:*:animate-rise-in motion-safe:*:[animation-delay:260ms]'>
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
