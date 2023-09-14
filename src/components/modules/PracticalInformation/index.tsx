import {
  BedDoubleIcon,
  PawPrintIcon,
  RefrigeratorIcon,
  WifiIcon
} from 'lucide-react'
import PracticalInformationCard from './PracticalInformationCard'
import Heading from '@/components/elements/Heading'

const PracticalInformation = () => {
  return (
    <section>
      <Heading level={2} className='mb-8 text-center'>
        Informations pratiques
      </Heading>
      <ul className='flex w-full flex-1 justify-around gap-6'>
        <PracticalInformationCard description='Wifi'>
          <WifiIcon size={40} />
        </PracticalInformationCard>

        <PracticalInformationCard description='Animaux non-admis'>
          <PawPrintIcon size={40} />
        </PracticalInformationCard>

        <PracticalInformationCard description='Lit king-size 180x200'>
          <BedDoubleIcon size={40} />
        </PracticalInformationCard>

        <PracticalInformationCard description='Mini frigo'>
          <RefrigeratorIcon size={40} />
        </PracticalInformationCard>

        <PracticalInformationCard description='Wifi'>
          <WifiIcon size={40} />
        </PracticalInformationCard>
      </ul>
    </section>
  )
}
export default PracticalInformation
