import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import Link from 'next/link'

type LogoProps = ClassNameProps & {
  onCloseMenu?: () => void
}

export const Logo = ({ onCloseMenu, className }: LogoProps) => {
  const classes = cn(
    'flex flex-col box-border cursor-pointer mr-8 border-y-4 border-white text-2xl font-extrabold w-max text-white',
    className
  )

  return (
    <Link
      href='/'
      className={classes}
      onClick={onCloseMenu}
      aria-label={`${ESTABLISHMENT_TITLE} Logo`}
      data-testid='app-main-logo'
    >
      <span>LOGO</span>
    </Link>
  )
}
