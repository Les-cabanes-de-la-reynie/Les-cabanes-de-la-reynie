import { Skeleton } from '@/components/ui/skeleton'

const CarouselWithLightboxSkeleton = () => {
  return (
    <div className='mb-5'>
      <div className='mb-2 flex items-center justify-between pl-4'>
        <Skeleton className='h-[36px] w-32'></Skeleton>
        <div className='flex'>
          <Skeleton className='h-10 w-10 rounded-full'></Skeleton>
          <Skeleton className='ml-2 h-10 w-10 rounded-full'></Skeleton>
        </div>
      </div>
      <div className='grid w-full grid-flow-col grid-cols-1 gap-2 overflow-auto sm:grid-cols-2 lg:grid-cols-3'>
        <Skeleton className='mx-1 h-60 rounded-lg object-cover'></Skeleton>
        <Skeleton className='mx-1 h-60 rounded-lg object-cover'></Skeleton>
        <Skeleton className='mx-1 h-60 rounded-lg object-cover'></Skeleton>
      </div>
    </div>
  )
}
export default CarouselWithLightboxSkeleton
