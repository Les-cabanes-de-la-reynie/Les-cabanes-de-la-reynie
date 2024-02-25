import { MenuIcon, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

type BurgerMenuProps = {
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
      aria-label={isBurgerMenuOpen ? t('closeBurgerMenu') : t('openBurgerMenu')}
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
