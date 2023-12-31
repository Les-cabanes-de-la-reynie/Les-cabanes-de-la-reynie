import { KeyboardEvent, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import useToggle from '@/hooks/useToggle'
import NavItem from './NavItem'
import NavList from './NavList'
import useOutsideClick from '@/hooks/useOutsideClick'
import { cn } from '@/lib/utils'

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

  return (
    <nav aria-labelledby='Main'>
      <NavList>
        <NavItem>
          <Link href={`/${lang}`} onClick={onCloseBurgerMenu}>
            {t('home')}
          </Link>
        </NavItem>
        <NavItem
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
              'flex flex-col bg-primary-dark lg:absolute lg:top-14 lg:rounded-lg lg:border lg:border-primary lg:p-3 lg:shadow-md':
                isNestedListOpen
            })}
            ref={popupRef}
          >
            <NavItem className='py-0 pl-5'>
              <Link
                href={`/${lang}/logements/yourte`}
                className='flex max-w-max items-center gap-2 py-1 lg:rounded-lg'
                onClick={onCloseBurgerMenu}
                data-test='header-yurt-link'
              >
                {t('yurt')}
              </Link>
            </NavItem>
            <NavItem className='py-0 pl-5'>
              <Link
                href={`/${lang}/logements/cabane`}
                className='flex max-w-max items-center gap-2 py-1 lg:rounded-lg'
                onClick={onCloseBurgerMenu}
                onBlur={handleClosePopup}
                data-test='header-hut-link'
              >
                {t('hut')}
              </Link>
            </NavItem>
          </NavList>
        </NavItem>
        <NavItem>
          <Link href={`/${lang}/contact`} onClick={onCloseBurgerMenu}>
            {t('contact')}
          </Link>
        </NavItem>
        <NavItem>
          <Link href={`/${lang}/activites`} onClick={onCloseBurgerMenu}>
            {t('activities')}
          </Link>
        </NavItem>
      </NavList>
    </nav>
  )
}
export default MainNavigation
