import Link from 'next/link'
import { Locale } from '../../../i18n.config'
import LocaleSwitcher from '../elements/LocaleSwitcher'
import { getDictionary } from '@/lib/dictionary'

const Header = async ({ lang }: { lang: Locale }) => {
  const { Navigation } = await getDictionary(lang)

  return (
    <header className='sticky inset-0 z-20 box-border flex h-[4.5rem] w-full items-center border-b border-border bg-stone-950'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{Navigation.menu}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{Navigation.restaurants}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}

export default Header
