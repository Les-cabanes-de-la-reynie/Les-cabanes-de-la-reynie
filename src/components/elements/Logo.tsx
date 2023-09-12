import Link from 'next/link'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'

interface LogoProps extends ClassNameProps {
  onCloseMenu?: () => void
}

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const classes = cn(
    'box-border cursor-pointer mr-8 border-y-4 border-primary',
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
      <span className='text-2xl font-extrabold text-primary'>PickN`Eat</span>
    </Link>
  )
}
export default Logo
