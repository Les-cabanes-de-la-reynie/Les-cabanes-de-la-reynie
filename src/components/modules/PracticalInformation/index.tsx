import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import DoubleBedIcon from '@/components/images/icons/practicalInformation/DoubleBedIcon'
import PawPrintIcon from '@/components/images/icons/practicalInformation/PawPrintIcon'
import RefrigeratorIcon from '@/components/images/icons/practicalInformation/RefrigeratorIcon'
import ShowerIcon from '@/components/images/icons/practicalInformation/ShowerIcon'
import ToiletIcon from '@/components/images/icons/practicalInformation/ToiletIcon'
import WifiIcon from '@/components/images/icons/practicalInformation/WifiIcon'
import { useTranslations } from 'next-intl'
import PracticalInformationCard from './PracticalInformationCard'
import PracticalInformationList from './PracticalInformationList'

const PracticalInformation = () => {
  const t = useTranslations('Common')

  const COMMON_ICON_CLASSNAME = 'h-12 w-12 fill-primary'

  return (
    <Container className='my-10'>
      <section>
        <Heading level={2} className='mb-8 text-center'>
          {t('practicalInformation')}
        </Heading>

        <PracticalInformationList>
          <PracticalInformationCard description='Wifi'>
            <WifiIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description='Animaux admis'>
            <PawPrintIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description='Lit king-size 180x200'>
            <DoubleBedIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description='Frigo'>
            <RefrigeratorIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description='Douche'>
            <ShowerIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>

          <PracticalInformationCard description='Toilette'>
            <ToiletIcon className={COMMON_ICON_CLASSNAME} />
          </PracticalInformationCard>
        </PracticalInformationList>
      </section>
    </Container>
  )
}
export default PracticalInformation
