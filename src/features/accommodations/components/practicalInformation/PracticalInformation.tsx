import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import {
  BedDoubleIcon,
  CarFrontIcon,
  PawPrintIcon,
  RefrigeratorIcon,
  ShowerHeadIcon,
  ToiletIcon,
  WifiIcon
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { PracticalInformationCard } from './PracticalInformationCard'
import { PracticalInformationList } from './PracticalInformationList'

const ICON_CLASSNAME = 'size-10 text-ink'
const ICON_STROKE_WIDTH = 1.5

export const PracticalInformation = () => {
  const t = useTranslations('Common')
  const t2 = useTranslations('Accommodations')

  return (
    <Container>
      <section>
        <Heading level={2} className='mb-4'>
          {t('practicalInformation')}
        </Heading>

        <PracticalInformationList>
          <PracticalInformationCard description={t2('wifi')}>
            <WifiIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('animal')}>
            <PawPrintIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('bed')}>
            <BedDoubleIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('fridge')}>
            <RefrigeratorIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('shower')}>
            <ShowerHeadIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('dryToilet')}>
            <ToiletIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>

          <PracticalInformationCard description={t2('carPark')}>
            <CarFrontIcon
              aria-hidden='true'
              className={ICON_CLASSNAME}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </PracticalInformationCard>
        </PracticalInformationList>
      </section>
    </Container>
  )
}
