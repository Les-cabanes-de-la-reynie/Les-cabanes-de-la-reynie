import Link from 'next/link'
import createTranslation from 'next-translate/createTranslation'
import FooterNav from './FooterNav'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'
import Container from '@/components/elements/Container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react'

const Footer = () => {
  const { lang, t } = createTranslation('footer')

  return (
    <footer className='box-border w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950'>
      <Container className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        <FooterNav>
          <FooterHeading>{t('aboutUs')}</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={`/${lang}`}>{t('leadershipTeam')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}`}>{t('valuesInAction')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}`}>{t('franchiseInfo')}</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading>Dashboard</FooterHeading>
          <ul>
            <FooterItem>
              <Link href='/api/auth/logout'>LOGOUT</Link>
            </FooterItem>
            <FooterItem>
              <Link href='/api/auth/login'>LOGIN</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}/dashboard`}>Espace ADMIN</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('followUs')}</FooterHeading>
          <ul className='flex gap-4'>
            <FooterItem>
              <Link
                href='https://www.google.fr/'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 transition-colors hover:bg-primary hover:text-white dark:bg-zinc-700 dark:hover:bg-primary'
              >
                <FacebookIcon />
              </Link>
            </FooterItem>
            <FooterItem>
              <Link
                href='https://www.google.fr/'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 transition-colors hover:bg-primary hover:text-white dark:bg-zinc-700 dark:hover:bg-primary'
              >
                <TwitterIcon />
              </Link>
            </FooterItem>
            <FooterItem>
              <Link
                href='https://www.google.fr/'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 transition-colors hover:bg-primary hover:text-white dark:bg-zinc-700 dark:hover:bg-primary'
              >
                <LinkedinIcon />
              </Link>
            </FooterItem>
            <FooterItem>
              <Link
                href='https://www.google.fr/'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 transition-colors hover:bg-primary hover:text-white dark:bg-zinc-700 dark:hover:bg-primary'
              >
                <InstagramIcon />
              </Link>
            </FooterItem>
          </ul>
        </FooterNav>
      </Container>
    </footer>
  )
}
export default Footer
