import logoOnDark from '@/assets/logo/logo-on-dark.webp'
import logoOnLight from '@/assets/logo/logo-on-light.webp'
import { Link } from '@/i18n/navigation'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'
import Image from 'next/image'

type LogoProps = ClassNameProps & {
  onCloseMenu?: () => void
  // 'dark' sits on the forest header band, 'auto' follows the site theme
  tone?: 'dark' | 'auto'
}

const IMAGE_CLASSNAME = 'h-12 w-auto sm:h-14'

export const Logo = ({ onCloseMenu, tone = 'dark', className }: LogoProps) => {
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
      {tone === 'auto' && (
        <Image
          src={logoOnLight}
          alt=''
          loading='eager'
          unoptimized
          className={cn(IMAGE_CLASSNAME, 'dark:hidden')}
        />
      )}
      <Image
        src={logoOnDark}
        alt=''
        loading='eager'
        unoptimized
        className={cn(IMAGE_CLASSNAME, tone === 'auto' && 'hidden dark:block')}
      />
    </Link>
  )
}
