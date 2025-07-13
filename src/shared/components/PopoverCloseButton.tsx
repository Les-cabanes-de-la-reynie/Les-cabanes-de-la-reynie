import { PopoverClose } from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import { KeyboardEvent } from 'react'
import { APP_ICON_SIZE_CLASSNAME } from '../_constants/className'

type PopoverCloseButtonProps = {
  onPopoverClose?: () => void
}

export const PopoverCloseButton = ({
  onPopoverClose
}: PopoverCloseButtonProps) => {
  return (
    <PopoverClose
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' && onPopoverClose) {
          onPopoverClose()
        }
      }}
      className='absolute select-none -right-2 -top-2 bg-popover inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-hidden transition-colors hover:bg-accent focus:shadow-[0_0_0_2px]'
      aria-label='Close'
    >
      <X className={APP_ICON_SIZE_CLASSNAME} />
    </PopoverClose>
  )
}
