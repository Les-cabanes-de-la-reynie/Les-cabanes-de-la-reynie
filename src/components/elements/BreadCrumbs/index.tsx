import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

interface FBreadCrumbsProps extends ClassNameProps {
  breadCrumbs?: string[]
}

const BreadCrumbs = ({ breadCrumbs, className }: FBreadCrumbsProps) => {
  return (
    <nav aria-label='Breadcrumb' className={cn('flex', className)}>
      <ol className='flex overflow-hidden rounded-lg border border-border text-white'>
        <li className='flex items-center'>
          <Link
            href='#'
            className='transition-color flex h-10 items-center gap-1.5 bg-stone-950 px-4 hover:text-gray-900'
          >
            <HomeIcon size={14} />

            <span className='ms-1.5 text-xs font-medium'> Home </span>
          </Link>
        </li>

        <li className='relative flex items-center'>
          <span className='absolute inset-y-0 -start-px h-10 w-4 bg-stone-950 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180'></span>
          <Link
            href='#'
            className='transition-color flex h-10 items-center bg-stone-800 pe-4 ps-8 text-xs font-medium hover:text-gray-900'
          >
            Shirts
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumbs
