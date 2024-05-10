import { PopoverClose } from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import { KeyboardEvent } from 'react'

type PopoverCloseButtonProps = {
  onPopoverClose?: () => void
}

const PopoverCloseButton = ({ onPopoverClose }: PopoverCloseButtonProps) => {
  return (
    <PopoverClose
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' && onPopoverClose) {
          onPopoverClose()
        }
      }}
      className='absolute select-none -right-2 -top-2 bg-popover inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-none transition-colors hover:bg-accent focus:shadow-[0_0_0_2px]'
      aria-label='Close'
    >
      <X size={16} />
    </PopoverClose>
  )
}
export default PopoverCloseButton
