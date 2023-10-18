import Link from 'next/link'
import createTranslation from 'next-translate/createTranslation'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'

interface LogoProps extends ClassNameProps {
  onCloseMenu?: () => void
}

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const { lang } = createTranslation('common')

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
