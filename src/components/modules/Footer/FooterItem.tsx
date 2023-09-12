import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

const FooterItem = ({ children }: PropsWithChildren) => {
  const { lang } = useTranslation('delivery')

  return (
    <li className='mb-2 max-w-max text-sm text-zinc-700 hover:underline dark:text-white md:max-w-none'>
      <Link href={`/${lang}`}>{children}</Link>
    </li>
  )
}
export default FooterItem
