import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { MoonIcon, SunIcon } from 'lucide-react'
import { ThemeMode } from '../_types'

type ThemeSwitcherIconProps = { theme?: string }

export const ThemeSwitcherIcon = ({ theme }: ThemeSwitcherIconProps) => {
  return theme === ThemeMode.Dark ? (
    <MoonIcon className={APP_ICON_SIZE_CLASSNAME} />
  ) : (
    <SunIcon className={APP_ICON_SIZE_CLASSNAME} />
  )
}
