import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Button } from '@/shared/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu'
import { signOut } from '@/shared/lib/auth-client'
import { User } from 'better-auth'
import { Edit3Icon, LogOutIcon, UserIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ProfileContentProps = {
  user: User
}

export const ProfileContent = ({ user }: ProfileContentProps) => {
  const t = useTranslations('Navigation')
  const router = useRouter()

  const onLogout = async () => {
    await signOut()
    router.push(PAGE_ROUTES.home)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='hover:bg-transparent'>
          <UserIcon className='mr-2 h-8 w-8 shrink-0 rounded-full' />
          <span className='sr-only'>User profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>
          {t('profile')} ({user?.name})
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href={PAGE_ROUTES.admin.home}>
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
