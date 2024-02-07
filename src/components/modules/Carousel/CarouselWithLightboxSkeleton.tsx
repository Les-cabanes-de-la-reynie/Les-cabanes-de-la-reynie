import { Skeleton } from '@/components/ui/skeleton'

const CarouselWithLightboxSkeleton = () => {
  return (
    <div className='mb-5'>
      <header className='mb-2 flex items-center justify-between pl-4'>
        <Skeleton className='h-[36px] w-32'></Skeleton>
        <div className='flex'>
          <Skeleton className='h-10 w-10 rounded-full'></Skeleton>
          <Skeleton className='mx-2 h-10 w-10 rounded-full'></Skeleton>
        </div>
      </header>

      <div className='grid w-full grid-flow-col grid-cols-1 overflow-auto md:grid-cols-2 lg:grid-cols-3'>
        <Skeleton className='mx-4 h-60 rounded-lg object-cover'></Skeleton>
        <Skeleton className='h-60 rounded-lg object-cover md:mx-4'></Skeleton>
        <Skeleton className='h-60 rounded-lg object-cover lg:mx-4'></Skeleton>
      </div>
    </div>
  )
}
export default CarouselWithLightboxSkeleton
