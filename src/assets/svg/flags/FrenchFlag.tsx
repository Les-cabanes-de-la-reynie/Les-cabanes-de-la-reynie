import { APP_ICON_SIZE_CLASSNAME } from '@/_constants/className'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'

export const FrenchFlag = ({ className }: ClassNameProps) => {
  return (
    <svg
      className={cn(APP_ICON_SIZE_CLASSNAME, className)}
      viewBox='0 0 640 480'
    >
      <path fill='#fff' d='M0 0h640v480H0z' />
      <path fill='#000091' d='M0 0h213.3v480H0z' />
      <path fill='#e1000f' d='M426.7 0H640v480H426.7z' />
    </svg>
  )
}
