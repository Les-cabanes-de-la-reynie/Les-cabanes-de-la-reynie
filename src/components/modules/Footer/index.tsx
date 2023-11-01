import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
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
import FollowUsItem from './FollowUsItem'

const Footer = () => {
  const t = useTranslations('Footer')
  const lang = useLocale()

  return (
    <footer className='box-border w-full border-t'>
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
              <FollowUsItem href='https://www.google.fr/'>
                <FacebookIcon />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem href='https://www.google.fr/'>
                <TwitterIcon />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem href='https://www.google.fr/'>
                <LinkedinIcon />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem href='https://www.google.fr/'>
                <InstagramIcon />
              </FollowUsItem>
            </FooterItem>
          </ul>
        </FooterNav>
      </Container>
    </footer>
  )
}
export default Footer
