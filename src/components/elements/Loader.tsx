import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'
import { Loader2 } from 'lucide-react'

const Loader = ({ className }: ClassNameProps) => {
  return (
    <Loader2
      className={cn(
        'mt-20 w-full animate-spin text-center text-white',
        className
      )}
    />
  )
}
export default Loader
