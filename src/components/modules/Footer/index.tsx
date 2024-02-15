import Container from '@/components/elements/Container'
import FacebookIcon from '@/components/images/icons/socialMedia/FacebookIcon'
import InstagramIcon from '@/components/images/icons/socialMedia/InstagramIcon'
import LinkedInIcon from '@/components/images/icons/socialMedia/LinkedInIcon'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import FollowUsItem from './FollowUsItem'
import FooterCopyright from './FooterCopyright'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'
import FooterNav from './FooterNav'

const Footer = () => {
  const t = useTranslations('Footer')
  const lang = useLocale()

  const COMMON_ICON_CLASSNAME =
    'fill-card-foreground transition-colors hover:fill-primary h-7 w-7'

  return (
    <footer className='box-border w-full border-t md:px-6 md:pt-6'>
      <Container className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:p-0'>
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
          <FooterHeading>Admin</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={`/api/auth/login`}>Item 1</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}`}>Item 2</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}/admin`}>Espace admin</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('followUs')}</FooterHeading>
          <ul className='flex gap-6'>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('facebookButton')}
              >
                <FacebookIcon className={COMMON_ICON_CLASSNAME} />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('instagramButton')}
              >
                <InstagramIcon className={COMMON_ICON_CLASSNAME} />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('linkedinButton')}
              >
                <LinkedInIcon className={COMMON_ICON_CLASSNAME} />
              </FollowUsItem>
            </FooterItem>
          </ul>
        </FooterNav>
      </Container>

      <FooterCopyright />
    </footer>
  )
}
export default Footer
