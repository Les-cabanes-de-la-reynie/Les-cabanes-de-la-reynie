import { MenuIcon, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import Button from './Button'
import { ClassNameProps } from '@/_types/components'

interface BurgerMenuProps extends ClassNameProps {
  isBurgerMenuOpen: boolean
  onToggleBurgerMenu: () => void
}

const BurgerMenu = ({
  className,
  isBurgerMenuOpen,
  onToggleBurgerMenu
}: BurgerMenuProps) => {
  return (
    <Button
      kind='headless'
      className={cn(
        'ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-stone-800 lg:hidden',
        {
          'bg-primary hover:bg-primary': isBurgerMenuOpen
        },
        className
      )}
      onClick={onToggleBurgerMenu}
    >
      {isBurgerMenuOpen ? <X size={25} /> : <MenuIcon size={25} />}
    </Button>
  )
}
export default BurgerMenu
