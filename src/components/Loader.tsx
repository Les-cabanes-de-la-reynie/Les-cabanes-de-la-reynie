import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { Loader2 } from 'lucide-react'

export const Loader = ({ className }: ClassNameProps) => {
  return (
    <Loader2 className={cn('h-8 w-full animate-spin text-center', className)} />
  )
}
