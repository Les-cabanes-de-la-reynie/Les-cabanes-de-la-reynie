import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import FooterNav from './FooterNav'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'
import Container from '@/components/elements/Container'

const Footer = () => {
  const { lang, t } = useTranslation('footer')

  return (
    <footer className='box-border w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950'>
      <Container className='flex-wrap md:flex-row md:justify-between lg:justify-around'>
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
          <FooterHeading> {t('careers')}</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={`/${lang}`}>{t('employeePerks')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}`}>{t('workingWithUs')}</Link>
            </FooterItem>
            <FooterItem>
              <Link href={`/${lang}`}>{t('applyNow')}</Link>
            </FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('contactUs')}</FooterHeading>
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
      </Container>
    </footer>
  )
}
export default Footer
