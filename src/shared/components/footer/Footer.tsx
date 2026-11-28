import logoOnDark from '@/assets/logo/logo-on-dark.webp'
import { Link } from '@/i18n/navigation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { cn } from '@/shared/utils/tailwind'
import { LockKeyholeIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Address } from './Address'
import { FooterCopyright } from './FooterCopyright'
import { FooterHeading } from './FooterHeading'
import { FOOTER_LINK_CLASSNAME, FooterLink } from './FooterLink'

// A forest band like the header: brand, links and contact, then a bottom bar
export const Footer = () => {
  const t = useTranslations('Footer')
  const tHome = useTranslations('Home')
  const tLegal = useTranslations('Legal')

  return (
    <footer className='bg-header text-white' data-testid='app-footer'>
      <Container className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-x-10 lg:py-14'>
        <div className='flex flex-col items-start gap-4 md:col-span-3 lg:col-span-1'>
          <Link
            href={PAGE_ROUTES.home}
            aria-label={t('logoLabel')}
            className='rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
          >
            <Image
              src={logoOnDark}
              alt=''
              unoptimized
              className='h-14 w-auto'
            />
          </Link>
          <p className='max-w-[30ch] text-[15px] text-balance text-white/75'>
            {tHome('heroSubtitle')}
          </p>
        </div>

        <nav aria-label={t('discover')}>
          <FooterHeading>{t('discover')}</FooterHeading>
          <ul>
            <FooterLink href={PAGE_ROUTES.accommodation.yurt}>
              {t('yurt')}
            </FooterLink>
            <FooterLink href={PAGE_ROUTES.accommodation.cabin}>
              {t('cabin')}
            </FooterLink>
            <FooterLink href={PAGE_ROUTES.activity.home}>
              {t('activities')}
            </FooterLink>
            <FooterLink href={PAGE_ROUTES.findUs}>{t('findUs')}</FooterLink>
          </ul>
        </nav>

        <nav aria-label={t('legal')}>
          <FooterHeading>{t('legal')}</FooterHeading>
          <ul>
            <FooterLink
              href={PAGE_ROUTES.legal.notice}
              testId='footer-legal-notice-link'
            >
              {tLegal('documents.notice')}
            </FooterLink>
            <FooterLink
              href={PAGE_ROUTES.legal.terms}
              testId='footer-terms-link'
            >
              {tLegal('documents.terms')}
            </FooterLink>
            <FooterLink
              href={PAGE_ROUTES.legal.privacy}
              testId='footer-privacy-link'
            >
              {tLegal('documents.privacy')}
            </FooterLink>
          </ul>
        </nav>

        <div>
          <FooterHeading>{t('contact')}</FooterHeading>
          <Address />
        </div>
      </Container>

      <div className='border-t border-white/10'>
        <Container className='gap-3 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between md:py-5'>
          <FooterCopyright />
          {/* The admin is for the owner only: no prefetch for every visitor */}
          <Link
            href={PAGE_ROUTES.admin.home}
            prefetch={false}
            rel='nofollow'
            data-testid='footer-owner-area-link'
            className={cn(
              FOOTER_LINK_CLASSNAME,
              'shrink-0 gap-2 self-start text-white/70 sm:self-auto'
            )}
          >
            <LockKeyholeIcon aria-hidden className='size-4' />
            {t('ownerArea')}
          </Link>
        </Container>
      </div>
    </footer>
  )
}
