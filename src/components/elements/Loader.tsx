import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'
import { Loader2 } from 'lucide-react'

const Loader = ({ className }: ClassNameProps) => {
  return (
    <Loader2
      className={cn(
        'mt-10 h-8 w-full animate-spin text-center text-primary-black dark:text-white',
        className
      )}
    />
  )
}
export default Loader
