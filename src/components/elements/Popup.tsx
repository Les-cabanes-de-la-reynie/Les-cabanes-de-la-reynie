import { PropsWithChildren, useRef } from 'react'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'
import useOutsideClick from '@/hooks/useOutsideClick'

interface PopupProps extends PropsWithChildren, ClassNameProps {
  isOpen: boolean
  cb: () => void
}

const Popup = ({ isOpen, cb, className, children }: PopupProps) => {
  const popupRef = useRef(null as unknown as HTMLDivElement)

  const handleClickOutside = () => {
    if (isOpen) {
      cb()
    }
  }

  useOutsideClick(popupRef, handleClickOutside)

  return (
    <div
      ref={popupRef}
      className={cn(
        'absolute z-10 mt-1 hidden w-max max-w-sm flex-col rounded border border-border bg-zinc-50 p-2 text-white shadow-lg shadow-zinc-950 dark:bg-zinc-950',
        { flex: isOpen },
        className
      )}
    >
      {children}
    </div>
  )
}
export default Popup
