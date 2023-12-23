import { useTranslations } from 'next-intl'
import PracticalInformationCard from './PracticalInformationCard'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'
import DoubleBedIcon from '@/components/images/practicalInformation/DoubleBedIcon'
import WifiIcon from '@/components/images/practicalInformation/WifiIcon'
import PawPrintIcon from '@/components/images/practicalInformation/PawPrintIcon'
import RefrigeratorIcon from '@/components/images/practicalInformation/RefrigeratorIcon'
import ShowerIcon from '@/components/images/practicalInformation/ShowerIcon'
import ToiletIcon from '@/components/images/practicalInformation/ToiletIcon'

const PracticalInformation = () => {
  const t = useTranslations('Common')

  const COMMON_ICON_CLASSNAME = 'h-12 w-12 fill-primary'

  return (
    <Container className='my-10'>
      <section>
        <Heading level={2} className='mb-8 text-center'>
          {t('practicalInformation')}
        </Heading>
        <ul className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
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
        </ul>
      </section>
    </Container>
  )
}
export default PracticalInformation
