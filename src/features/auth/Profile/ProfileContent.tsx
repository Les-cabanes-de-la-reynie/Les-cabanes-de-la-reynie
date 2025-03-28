import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { User } from 'better-auth'
import { Edit3Icon, LogOutIcon, UserIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type ProfileContentProps = {
  user: User
  onLogout: () => Promise<void>
}

export const ProfileContent = ({ user, onLogout }: ProfileContentProps) => {
  const t = useTranslations('Navigation')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='hover:bg-transparent'>
          <UserIcon className='mr-2 h-8 w-8 shrink-0 rounded-full' />
          <span className='sr-only'>User profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>{t('profile')}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon className='mr-2 h-4 w-4 shrink-0' />
            <span>{user?.name}</span>
          </DropdownMenuItem>

          <Link href='/admin'>
            <DropdownMenuItem>
              <Edit3Icon className='mr-2 h-4 w-4 shrink-0' />
              <span>{t('modifyWebsiteInformation')}</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onLogout}>
          <LogOutIcon className='mr-2 h-4 w-4 shrink-0' />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
