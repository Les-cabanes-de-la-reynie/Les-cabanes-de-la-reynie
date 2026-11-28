import { Address } from '@/features/address/_types'
import { Link } from '@/i18n/navigation'
import { formatPhoneNumber } from '@/shared/utils/formats'
import { CircleAlertIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

const LINK_CLASSNAME =
  'rounded-xs text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export const List = ({ children }: PropsWithChildren) => (
  <ul className='list-disc space-y-2 pl-5 marker:text-ink'>{children}</ul>
)

export const PageLink = ({
  href,
  children
}: PropsWithChildren<{ href: ComponentProps<typeof Link>['href'] }>) => (
  <Link href={href} className={LINK_CLASSNAME}>
    {children}
  </Link>
)

export const OutLink = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => (
  <a href={href} className={LINK_CLASSNAME}>
    {children}
  </a>
)

export const Phone = ({ address }: { address: Address }) => (
  <OutLink href={`tel:${address.phone}`}>
    {formatPhoneNumber(address.phone)}
  </OutLink>
)

export const Email = ({ address }: { address: Address }) => (
  <OutLink href={`mailto:${address.email}`}>{address.email}</OutLink>
)

// Term / value pairs: stacked on phones, two columns from 640px
export const Facts = ({ items }: { items: [string, ReactNode][] }) => (
  <dl className='space-y-3 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-3 sm:space-y-0'>
    {items.map(([term, value]) => (
      <div key={term} className='sm:contents'>
        <dt className='text-muted-foreground'>{term}</dt>
        <dd className='font-medium wrap-anywhere'>{value}</dd>
      </div>
    ))}
  </dl>
)

const ToComplete = async () => {
  const t = await getTranslations('Legal')

  return (
    <span className='inline-flex items-center gap-1.5 rounded-md border border-dashed border-destructive px-2 py-0.5 text-sm font-semibold text-destructive'>
      <CircleAlertIcon aria-hidden className='size-3.5 shrink-0' />
      {t('toComplete')}
    </span>
  )
}

// A publisher field, or a visible marker while it is still empty
export const Value = ({ children }: { children: string }) =>
  children ? children : <ToComplete />
