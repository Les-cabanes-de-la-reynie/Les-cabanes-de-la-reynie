import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Address } from '@/shared/components/footer/Address'
import { useTranslations } from 'next-intl'
import { FooterCopyright } from './FooterCopyright'
import { FooterHeading } from './FooterHeading'
import { FooterItem } from './FooterItem'
import { FooterNav } from './FooterNav'

export const Footer = () => {
  const tFooter = useTranslations('Footer')

  return (
    <footer className='box-border w-full border-t md:px-6 md:pt-6'>
      <Container className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:pt-0'>
        <FooterNav>
          <FooterHeading>{tFooter('navigation')}</FooterHeading>
          <ul>
            <FooterItem>
              <Link href={PAGE_ROUTES.accommodation.yurt}>
                {tFooter('yurt')}
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.accommodation.cabin}>
                {tFooter('cabin')}
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.activity.home}>
                {tFooter('activities')}
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href={PAGE_ROUTES.findUs}>{tFooter('findUs')}</Link>
            </FooterItem>
          </ul>
        </FooterNav>

        <FooterNav>
          <FooterHeading> {tFooter('address')}</FooterHeading>
          <Address />
        </FooterNav>
      </Container>

      <FooterCopyright />
    </footer>
  )
}
