import { ClassNameProps } from '@/_types/components'
import Heading from '@/components/elements/Heading'
import { cn } from '@/utils/tailwind'
import { PropsWithChildren } from 'react'

type HeroBannerProps = PropsWithChildren &
  ClassNameProps & {
    title: string
  }

const HeroBanner = ({ children, title, className }: HeroBannerProps) => {
  const classes = cn(
    'relative h-[55vh] lg:h-[75vh] w-full select-none overflow-hidden',
    className
  )

  return (
    <div className={classes}>
      {children}
      <div className='absolute inset-0 flex items-center justify-center bg-opacity-20 p-4 text-center'>
        <Heading
          level={1}
          className='text-5xl text-primary-foreground lg:text-6xl'
          data-testid='home-page-main-title'
        >
          {title}
        </Heading>
      </div>
    </div>
  )
}
export default HeroBanner
