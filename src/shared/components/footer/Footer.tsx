import { FacebookIcon } from '@/assets/icons/socialMedia/FacebookIcon'
import { InstagramIcon } from '@/assets/icons/socialMedia/InstagramIcon'
import { LinkedInIcon } from '@/assets/icons/socialMedia/LinkedInIcon'
import { MailIcon } from '@/assets/icons/socialMedia/MailIcon'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FollowUsItem } from './FollowUsItem'
import { FooterCopyright } from './FooterCopyright'
import { FooterEmail } from './FooterEmail'
import { FooterHeading } from './FooterHeading'
import { FooterItem } from './FooterItem'
import { FooterNav } from './FooterNav'

export const Footer = () => {
  const t = useTranslations('Footer')

  const COMMON_ICON_CLASSNAME =
    'fill-card-foreground transition-colors hover:fill-primary h-7 w-7'

  return (
    <footer className='box-border w-full border-t md:px-6 md:pt-6'>
      <Container className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:p-0'>
        <FooterNav>
          <FooterHeading>{t('aboutUs')}</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={PAGE_ROUTES.home}>{t('leadershipTeam')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.home}>{t('valuesInAction')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.home}>{t('franchiseInfo')}</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading>Admin</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={PAGE_ROUTES.home}>Item 1</Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.admin.signIn}>Sign in</Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.admin.home}>Admin</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('followUs')}</FooterHeading>
          <ul className='flex gap-6'>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={t('facebookButton')}
            >
              <FacebookIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={t('instagramButton')}
            >
              <InstagramIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={t('linkedinButton')}
            >
              <LinkedInIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
            <FooterEmail ariaLabel={t('email')}>
              <MailIcon className={COMMON_ICON_CLASSNAME} />
            </FooterEmail>
          </ul>
        </FooterNav>
      </Container>

      <FooterCopyright />
    </footer>
  )
}
