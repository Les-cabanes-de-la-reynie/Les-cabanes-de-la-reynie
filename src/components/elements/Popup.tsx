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

  const classes = cn(
    'absolute z-10 mt-1 hidden w-max flex-col rounded-lg bg-primary p-2 text-white shadow-md lg:bg-primary-dark',
    { flex: isOpen },
    className
  )

  return (
    <div ref={popupRef} className={classes}>
      {children}
    </div>
  )
}
export default Popup
