'use client'

import { usePathname } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'
import AsideProductCategory from './AsideProductCategory'
import { routes } from './routes'

const AsideProductCategories = () => {
  const { t } = useTranslation('home')

  const pathname = usePathname()

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {t('allOurProducts')}
      </Heading>

      {routes?.map(({ href, label, id }) => {
        const isActive = pathname === href

        return (
          <AsideProductCategory key={id} href={href} isActiveLink={isActive}>
            {label}
          </AsideProductCategory>
        )
      })}
    </aside>
  )
}
export default AsideProductCategories
