import { FacebookIcon } from '@/assets/icons/socialMedia/FacebookIcon'
import { InstagramIcon } from '@/assets/icons/socialMedia/InstagramIcon'
import { LinkedInIcon } from '@/assets/icons/socialMedia/LinkedInIcon'
import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Address } from '@/shared/components/footer/Address'
import { useTranslations } from 'next-intl'
import { FollowUsItem } from './FollowUsItem'
import { FooterCopyright } from './FooterCopyright'
import { FooterHeading } from './FooterHeading'
import { FooterItem } from './FooterItem'
import { FooterNav } from './FooterNav'

export const Footer = () => {
  const tFooter = useTranslations('Footer')

  const COMMON_ICON_CLASSNAME =
    'fill-card-foreground transition-colors hover:fill-primary h-7 w-7'

  return (
    <footer className='box-border w-full border-t md:px-6 md:pt-6'>
      <Container className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:pt-0'>
        <FooterNav>
          <FooterHeading>{tFooter('aboutUs')}</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={PAGE_ROUTES.home}>{tFooter('leadershipTeam')}</Link>
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
          <FooterHeading> {tFooter('address')}</FooterHeading>
          <Address />
        </FooterNav>

        <FooterNav>
          <FooterHeading> {tFooter('followUs')}</FooterHeading>
          <ul className='flex gap-6'>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={tFooter('facebookButton')}
            >
              <FacebookIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={tFooter('instagramButton')}
            >
              <InstagramIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
            <FollowUsItem
              href='https://www.google.fr/'
              aria-label={tFooter('linkedinButton')}
            >
              <LinkedInIcon className={COMMON_ICON_CLASSNAME} />
            </FollowUsItem>
          </ul>
        </FooterNav>
      </Container>

      <FooterCopyright />
    </footer>
  )
}
