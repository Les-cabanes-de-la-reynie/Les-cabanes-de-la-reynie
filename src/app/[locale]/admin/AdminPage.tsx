import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import AddressInformationSection from '@/components/modules/AddressInformation/AddressInformationSection'
import HomeSection from '@/components/modules/Home/HomeSection'
import HutSection from '@/components/modules/Hut/HutSection'
import OpeningHoursSection from '@/components/modules/OpeningHours/OpeningHoursSection'
import YurtSection from '@/components/modules/Yurt/YurtSection'
import { Separator } from '@/components/ui/separator'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import { useLocale } from 'next-intl'

const AdminPage: NextPage = withPageAuthRequired(
  async () => {
    return (
      <Container>
        <Heading level={1} className='mb-8 mt-4 text-center'>
          Admin
        </Heading>

        <AddressInformationSection />

        <Separator className='mb-12 mt-4' />

        <OpeningHoursSection editable={true} />

        <Separator className='mb-12 mt-4' />

        <HomeSection />

        <Separator className='mb-12 mt-4' />

        <YurtSection />

        <Separator className='mb-12 mt-4' />

        <HutSection />
      </Container>
    )
  },
  {
    returnTo: () => {
      // eslint-disable-next-line
      const lang = useLocale()
      return `${lang}/admin`
    }
  }
)
export default AdminPage
