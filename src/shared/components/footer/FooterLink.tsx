import { Link } from '@/i18n/navigation'
import { ComponentProps, PropsWithChildren } from 'react'

// 32px rows: comfortable to tap without spreading the lists out
export const FOOTER_LINK_CLASSNAME =
  'inline-flex min-h-8 items-center rounded-xs text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

type FooterLinkProps = PropsWithChildren & {
  href: ComponentProps<typeof Link>['href']
  testId?: string
}

export const FooterLink = ({ href, testId, children }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        data-testid={testId}
        className={`${FOOTER_LINK_CLASSNAME} text-[15px]`}
      >
        {children}
      </Link>
    </li>
  )
}
