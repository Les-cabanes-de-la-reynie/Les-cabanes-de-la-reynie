import { Skeleton } from '@/components/ui/skeleton'

const AccommodationsSliderSkeleton = () => {
  return (
    <Skeleton className='mb-5 bg-transparent'>
      <Skeleton className='mb-4 h-[36px] bg-popover pl-4'></Skeleton>
      <Skeleton className='grid w-full grid-flow-col grid-cols-1 gap-2 overflow-auto bg-transparent sm:grid-cols-2 lg:grid-cols-3'>
        <Skeleton className='mx-1 h-60 bg-popover object-cover'></Skeleton>
        <Skeleton className='mx-1 h-60 bg-popover object-cover'></Skeleton>
        <Skeleton className='mx-1 h-60 bg-popover object-cover'></Skeleton>
      </Skeleton>
    </Skeleton>
  )
}
export default AccommodationsSliderSkeleton
