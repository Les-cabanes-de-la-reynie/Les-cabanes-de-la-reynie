import { MenuIcon, X } from 'lucide-react'
import { Button } from '../ui/button'

interface BurgerMenuProps {
  isBurgerMenuOpen: boolean
  onToggleBurgerMenu: () => void
}

const BurgerMenu = ({
  isBurgerMenuOpen,
  onToggleBurgerMenu
}: BurgerMenuProps) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='rounded-full bg-primary-dark text-primary-foreground hover:bg-primary lg:hidden'
      onClick={onToggleBurgerMenu}
    >
      {isBurgerMenuOpen ? (
        <X className='h-6 w-6' />
      ) : (
        <MenuIcon className='h-6 w-6' />
      )}
    </Button>
  )
}
export default BurgerMenu
