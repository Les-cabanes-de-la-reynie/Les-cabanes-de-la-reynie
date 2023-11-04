import { MenuIcon, X } from 'lucide-react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

interface BurgerMenuProps {
  isBurgerMenuOpen: boolean
  onToggleBurgerMenu: () => void
}

const BurgerMenu = ({
  isBurgerMenuOpen,
  onToggleBurgerMenu
}: BurgerMenuProps) => {
  const t = useTranslations('Navigation')

  return (
    <Button
      variant='ghost'
      size='icon'
      className='rounded-full bg-primary-dark text-primary-foreground hover:bg-primary lg:hidden'
      onClick={onToggleBurgerMenu}
      aria-label={
        isBurgerMenuOpen ? t('closeBurgerMenuTitle') : t('openBurgerMenuTitle')
      }
      aria-expanded={isBurgerMenuOpen}
    >
      {isBurgerMenuOpen ? (
        <X className='h-6 w-6' aria-hidden='true' focusable='false' />
      ) : (
        <MenuIcon className='h-6 w-6' aria-hidden='true' focusable='false' />
      )}
    </Button>
  )
}
export default BurgerMenu
