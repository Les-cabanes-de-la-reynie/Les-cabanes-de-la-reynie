import Link from 'next/link'
import { cn } from 'utils/cn'
import { ClassNameProps } from '_types/components'
import { ESTABLISHMENT_TITLE } from '_constants/establishmentInformation'
import { useLocale } from 'next-intl'

interface LogoProps extends ClassNameProps {
  onCloseMenu?: () => void
}

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const lang = useLocale()

  const classes = cn(
    'flex flex-col box-border cursor-pointer mr-8 border-y-4 border-white text-2xl font-extrabold text-white',
    className
  )

  return (
    <Link
      href={`/${lang}`}
      className={classes}
      onClick={onCloseMenu}
      aria-label={`${ESTABLISHMENT_TITLE} Logo`}
      data-test='mainLogo'
    >
      <span>Les cabanes</span>
      <span>de la Reynie</span>
    </Link>
  )
}
export default Logo
