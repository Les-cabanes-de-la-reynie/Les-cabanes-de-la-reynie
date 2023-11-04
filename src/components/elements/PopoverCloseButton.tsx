import { PopoverClose } from '@radix-ui/react-popover'
import { X } from 'lucide-react'

interface PopoverCloseButtonProps {
  onClick?: () => void
}

const PopoverCloseButton = ({ onClick }: PopoverCloseButtonProps) => {
  return (
    <PopoverClose
      onClick={onClick}
      className='absolute right-[7px] top-[7px] inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-none transition-colors hover:text-primary focus:shadow-[0_0_0_2px]'
      aria-label='Close'
    >
      <X size={16} />
    </PopoverClose>
  )
}
export default PopoverCloseButton
