import useOutsideClick from '@/hooks/useOutsideClick'
import useToggle from '@/hooks/useToggle'
import { cn } from '@/utils/tailwind'
import { ChevronDown } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { KeyboardEvent, useEffect, useRef } from 'react'
import NavItem from './NavItem'
import NavList from './NavList'

type MainNavigationProps = {
  isBurgerMenuOpen: boolean
  onCloseBurgerMenu: () => void
}

const MainNavigation = ({
  isBurgerMenuOpen,
  onCloseBurgerMenu
}: MainNavigationProps) => {
  const t = useTranslations('Common')
  const lang = useLocale()

  const popupRef = useRef(null as unknown as HTMLUListElement)
  const [isNestedListOpen, handleToggleNestedList, setIsNestedListOpen] =
    useToggle()

  const handleClosePopup = () => {
    setIsNestedListOpen(false)
  }

  const handleClickOutside = () => {
    const media = window.matchMedia(`(min-width: 1024px)`)

    if (isNestedListOpen && media.matches) {
      setIsNestedListOpen(false)
    }
  }

  useOutsideClick(popupRef, handleClickOutside)

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      handleToggleNestedList()
    }
  }

  // Close accommodation list when burger menu is closed
  useEffect(() => {
    if (!isBurgerMenuOpen) {
      setIsNestedListOpen(false)
    }
  }, [isBurgerMenuOpen, setIsNestedListOpen])

  const navLinks = {
    home: `/${lang}`,
    yurt: `/${lang}/logements/yourte`,
    hut: `/${lang}/logements/cabane`,
    contact: `/${lang}/contact`,
    activities: `/${lang}/activites`
  }

  return (
    <nav
      aria-labelledby='Main'
      data-testid='header-main-navigation'
      className='lg:h-full'
    >
      <NavList>
        <NavItem routes={[navLinks.home]}>
          <Link href={navLinks.home} onClick={onCloseBurgerMenu}>
            {t('home')}
          </Link>
        </NavItem>
        <NavItem
          routes={[navLinks.yurt, navLinks.hut]}
          className={cn({
            'pb-0': isNestedListOpen
          })}
          onClick={handleToggleNestedList}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className={cn('flex max-w-max cursor-pointer items-center gap-2 ', {
              'pb-4 lg:pb-0': isNestedListOpen
            })}
          >
            {t('accommodations')}
            <ChevronDown
              className={cn('rotate-0 transition-transform', {
                'rotate-180': isNestedListOpen
              })}
            />
          </div>
          <NavList
            className={cn('hidden', {
              'to-secondary-dark flex h-16 flex-col bg-gradient-to-r from-primary lg:absolute lg:top-14 lg:rounded-lg lg:px-3 lg:py-2 lg:shadow-md':
                isNestedListOpen
            })}
            ref={popupRef}
          >
            <NavItem routes={[navLinks.yurt]} className='py-0 pl-5'>
              <Link
                href={navLinks.yurt}
                className='flex max-w-max items-center gap-2 py-1 lg:rounded-lg'
                onClick={onCloseBurgerMenu}
              >
                {t('yurt')}
              </Link>
            </NavItem>
            <NavItem routes={[navLinks.hut]} className='py-0 pl-5'>
              <Link
                href={navLinks.hut}
                className='flex max-w-max items-center gap-2 py-1 lg:rounded-lg'
                onClick={onCloseBurgerMenu}
                onBlur={handleClosePopup}
              >
                {t('hut')}
              </Link>
            </NavItem>
          </NavList>
        </NavItem>
        <NavItem routes={[navLinks.contact]}>
          <Link href={navLinks.contact} onClick={onCloseBurgerMenu}>
            {t('contact')}
          </Link>
        </NavItem>
        <NavItem routes={[navLinks.activities]}>
          <Link href={navLinks.activities} onClick={onCloseBurgerMenu}>
            {t('activities')}
          </Link>
        </NavItem>
      </NavList>
    </nav>
  )
}
export default MainNavigation
