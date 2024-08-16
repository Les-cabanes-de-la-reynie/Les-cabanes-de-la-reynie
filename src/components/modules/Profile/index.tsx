import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Edit3Icon, LogOutIcon, UserIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'

type ProfileProps = {
  handleCloseBurgerMenu: () => void
}

const Profile = ({ handleCloseBurgerMenu }: ProfileProps) => {
  const { user, error } = useUser()

  const t = useTranslations('Navigation')
  const lang = useLocale()

  if (error || !user?.email) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='hover:bg-transparent'>
          {!!user?.picture && (
            <Image
              src={user.picture}
              alt='Profile user popover trigger button'
              width={30}
              height={30}
              className='rounded-full'
            />
          )}
          <span className='sr-only'>User profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onEscapeKeyDown={handleCloseBurgerMenu}
        className='w-56'
      >
        <DropdownMenuLabel>{t('profile')}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon className='mr-2 h-4 w-4 flex-shrink-0' />
            <span>{user?.name}</span>
          </DropdownMenuItem>

          <Link href={`/${lang}/admin`}>
            <DropdownMenuItem>
              <Edit3Icon className='mr-2 h-4 w-4 flex-shrink-0' />
              <span>{t('modifyWebsiteInformation')}</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <Link href='/api/auth/logout'>
          <DropdownMenuItem>
            <LogOutIcon className='mr-2 h-4 w-4 flex-shrink-0' />
            <span>{t('logout')}</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Profile
