import Link from 'next/link'

import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
  const { t, lang } = useTranslation('navigation')

  return (
    <header className='sticky inset-0 z-20 flex h-[4.5rem] w-full items-center border-b border-border bg-stone-950'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li className='text-white'>
            <Link href={`/${lang}`} as={`/${lang}`}>
              {t('menu')}
            </Link>
          </li>
          <li className='text-white'>
            <Link href={`/${lang}/restaurants`} as={`/${lang}/restaurants`}>
              {t('restaurants')}
            </Link>
          </li>
          <li className='text-white'>
            <Link href={`/${lang}/delivery`} as={`/${lang}/delivery`}>
              {t('delivery')}
            </Link>
          </li>
        </ul>
        <LanguagesSwitcher />
      </nav>
    </header>
  )
}

export default Header
