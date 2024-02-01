import { ClassNameProps } from '@/_types/components'
import Heading from '@/components/elements/Heading'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type HeroBannerProps = PropsWithChildren &
  ClassNameProps & {
    title: string
  }

const HeroBanner = ({ children, title, className }: HeroBannerProps) => {
  const classes = cn('relative h-96 w-full select-none lg:h-screen', className)

  return (
    <div className={classes}>
      {children}
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 text-center'>
        <Heading
          level={1}
          className='text-5xl text-primary-foreground lg:text-6xl'
        >
          {title}
        </Heading>
      </div>
    </div>
  )
}
export default HeroBanner
