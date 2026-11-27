import { LogoHorizontal } from '@/assets/logo/LogoHorizontal'
import { Link } from '@/i18n/navigation'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'

type LogoProps = ClassNameProps & {
  onCloseMenu?: () => void
}

export const Logo = ({ onCloseMenu, className }: LogoProps) => {
  const classes = cn(
    'mr-8 flex w-max shrink-0 cursor-pointer items-center rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current',
    className
  )

  return (
    <Link
      href={PAGE_ROUTES.home}
      className={classes}
      onClick={onCloseMenu}
      aria-label={`${ESTABLISHMENT_TITLE} Logo`}
      data-testid='app-main-logo'
    >
      <LogoHorizontal className='h-9 w-auto' />
    </Link>
  )
}
