'use client'

import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'
import AsideProductCategory from './AsideProductCategory'
import { routes } from './routes'

const AsideProductCategories = () => {
  const { t } = useTranslation('home')

  return (
    <aside className='hidden lg:mr-8 lg:flex lg:flex-shrink-0 lg:flex-col lg:bg-primary'>
      <Heading level={2} className='px-4 py-10'>
        {t('allOurProducts')}
      </Heading>

      {routes.map(({ href, label, id }) => {
        // TODO : Remove "false" in isActiveLink with real active link
        return (
          <AsideProductCategory key={id} href={href} isActiveLink={false}>
            {label}
          </AsideProductCategory>
        )
      })}
    </aside>
  )
}
export default AsideProductCategories
