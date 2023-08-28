import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import useTranslation from 'next-translate/useTranslation'
import Heading from '../Heading'
import Card from '../ProductCard.tsx/Card'
import { ClassNameProps } from '@/_types/components'

interface CategoryCardProps extends PropsWithChildren, ClassNameProps {
  category: string
  title: string
}

const CategoryCard = ({
  category,
  title,
  className,
  children
}: CategoryCardProps) => {
  const { lang } = useTranslation('delivery')

  return (
    <Card className={cn(className)}>
      <Link
        href={`/${lang}/products/category/${category}`}
        className='relative aspect-square h-full xl:aspect-video'
      >
        {children}
        <div className='absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black transition-opacity hover:opacity-0'>
          <Heading level={2} className='mb-8'>
            {title}
          </Heading>
        </div>
      </Link>
    </Card>
  )
}
export default CategoryCard
