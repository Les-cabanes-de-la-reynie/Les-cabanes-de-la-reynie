import { KeyboardEvent } from 'react'
import { PopoverClose } from '@radix-ui/react-popover'
import { X } from 'lucide-react'

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
      className='absolute right-[7px] top-[7px] inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-none transition-colors hover:text-primary focus:shadow-[0_0_0_2px]'
      aria-label='Close'
    >
      <X size={16} />
    </PopoverClose>
  )
}
export default PopoverCloseButton
