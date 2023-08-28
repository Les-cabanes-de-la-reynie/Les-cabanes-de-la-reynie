import Link from 'next/link'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'

interface LogoProps extends ClassNameProps {
  onCloseMenu?: () => void
}

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const classes = cn(
    'box-border cursor-pointer border-y-4 border-primary text-2xl font-extrabold',
    className
  )

  return (
    <Link
      href='/'
      className={classes}
      onClick={onCloseMenu}
      aria-label='PickN`Eat Logo'
      data-test='mainLogo'
    >
      <span>PickN`Eat</span>
    </Link>
  )
}
export default Logo
