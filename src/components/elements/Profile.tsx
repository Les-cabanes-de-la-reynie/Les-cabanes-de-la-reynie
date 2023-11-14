import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Button } from '../ui/button'
import P from './P'
import PopoverCloseButton from './PopoverCloseButton'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface ProfileProps {
  handleCloseBurgerMenu: () => void
}

const Profile = ({ handleCloseBurgerMenu }: ProfileProps) => {
  const { user, error } = useUser()

  const t = useTranslations('Navigation')

  if (error || !user?.email) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='hover:bg-transparent'>
          {user?.picture && (
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
      </PopoverTrigger>
      <PopoverContent>
        <>
          <P className='mb-2 select-none'>{t('profile')}</P>
          <Separator className='mb-2' />
          <div>
            <P>{user?.name}</P>
            <Button asChild className='mt-4'>
              <Link href='/api/auth/logout'>{t('logout')}</Link>
            </Button>
          </div>
        </>
        <PopoverCloseButton onPopoverClose={handleCloseBurgerMenu} />
      </PopoverContent>
    </Popover>
  )
}
export default Profile
