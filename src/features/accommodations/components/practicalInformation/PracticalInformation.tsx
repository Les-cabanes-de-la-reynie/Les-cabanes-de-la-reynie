import { DoubleBedIcon } from '@/assets/icons/practicalInformation/DoubleBedIcon'
import { DryToiletIcon } from '@/assets/icons/practicalInformation/DryToiletIcon'
import { PawPrintIcon } from '@/assets/icons/practicalInformation/PawPrintIcon'
import { RefrigeratorIcon } from '@/assets/icons/practicalInformation/RefrigeratorIcon'
import { ShowerIcon } from '@/assets/icons/practicalInformation/ShowerIcon'
import { WifiIcon } from '@/assets/icons/practicalInformation/WifiIcon'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { cn } from '@/shared/utils/tailwind'
import { CarFrontIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { PracticalInformationCard } from './PracticalInformationCard'
import { PracticalInformationList } from './PracticalInformationList'

export const PracticalInformation = () => {
  const t = useTranslations('Common')
  const t2 = useTranslations('Accommodations')

  const COMMON_ICON_CLASSNAME = 'h-12 w-12 fill-primary stroke-1 stroke-primary'

  return (
    <Container>
      <section>
        <Heading level={2} className='mb-4'>
          {t('practicalInformation')}
        </Heading>

        <PracticalInformationList>
          <PracticalInformationCard description={t2('wifi')}>
            <WifiIcon className={cn(COMMON_ICON_CLASSNAME, 'stroke-0')} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('animal')}>
            <PawPrintIcon className={cn(COMMON_ICON_CLASSNAME, 'stroke-0')} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('bed')}>
            <DoubleBedIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('fridge')}>
            <RefrigeratorIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('shower')}>
            <ShowerIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('dryToilet')}>
            <DryToiletIcon className={cn(COMMON_ICON_CLASSNAME, 'stroke-0')} />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('carPark')}>
            <CarFrontIcon
              className={cn(COMMON_ICON_CLASSNAME, 'fill-transparent')}
            />
          </PracticalInformationCard>
        </PracticalInformationList>
      </section>
    </Container>
  )
}
