import Link from 'next/link'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'

type LogoProps = {
  onCloseMenu?: () => void
}

const Logo = ({ onCloseMenu }: LogoProps) => {
  const lang = useLocale()

  const classes = cn(
    'flex flex-col box-border cursor-pointer mr-8 border-y-4 border-white  text-2xl font-extrabold text-white'
  )

  return (
    <Link
      href={`/${lang}`}
      className={classes}
      onClick={onCloseMenu}
      aria-label={`${ESTABLISHMENT_TITLE} Logo`}
      data-test='app-main-logo'
    >
      <span>LOGO</span>
    </Link>
  )
}
export default Logo
