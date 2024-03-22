import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import DoubleBedIcon from '@/components/images/icons/practicalInformation/DoubleBedIcon'
import DryToiletIcon from '@/components/images/icons/practicalInformation/DryToiletIcon'
import PawPrintIcon from '@/components/images/icons/practicalInformation/PawPrintIcon'
import RefrigeratorIcon from '@/components/images/icons/practicalInformation/RefrigeratorIcon'
import ShowerIcon from '@/components/images/icons/practicalInformation/ShowerIcon'
import WifiIcon from '@/components/images/icons/practicalInformation/WifiIcon'
import { cn } from '@/utils/tailwind'
import { useTranslations } from 'next-intl'
import PracticalInformationCard from './PracticalInformationCard'
import PracticalInformationList from './PracticalInformationList'

const PracticalInformation = () => {
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
        </PracticalInformationList>
      </section>
    </Container>
  )
}
export default PracticalInformation
