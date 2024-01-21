import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import FooterNav from './FooterNav'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'
import Container from '@/components/elements/Container'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import FollowUsItem from './FollowUsItem'
import FooterCopyright from './FooterCopyright'

const Footer = () => {
  const t = useTranslations('Footer')
  const lang = useLocale()

  const COMMON_ICON_CLASSNAME = 'fill-card-foreground text-transparent'

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
          <ul className='flex gap-4'>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('facebookButton')}
              >
                <FacebookIcon
                  aria-hidden='true'
                  focusable='false'
                  className={COMMON_ICON_CLASSNAME}
                />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('xButton')}
              >
                <TwitterIcon
                  aria-hidden='true'
                  focusable='false'
                  className={COMMON_ICON_CLASSNAME}
                />
              </FollowUsItem>
            </FooterItem>
            <FooterItem>
              <FollowUsItem
                href='https://www.google.fr/'
                aria-label={t('linkedinButton')}
              >
                <LinkedinIcon
                  aria-hidden='true'
                  focusable='false'
                  className={COMMON_ICON_CLASSNAME}
                />
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
