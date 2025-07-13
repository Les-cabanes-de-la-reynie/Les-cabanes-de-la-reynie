import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs'
import { useTranslations } from 'next-intl'
import { CabinSection } from './CabinSection'
import { ContactSection } from './ContactSection'
import { HomeSection } from './HomeSection'
import { YurtSection } from './YurtSection'

const TAB_VALUES = {
  home: 'home',
  yurt: 'yurt',
  cabin: 'cabin',
  contact: 'contact'
}

export const AdminTabs = () => {
  const tCommon = useTranslations('Common')

  return (
    <Tabs defaultValue={TAB_VALUES.home}>
      <TabsList className='mb-10 w-full'>
        <TabsTrigger value={TAB_VALUES.home}>{tCommon('home')}</TabsTrigger>
        <TabsTrigger value={TAB_VALUES.yurt}>{tCommon('yurt')}</TabsTrigger>
        <TabsTrigger value={TAB_VALUES.cabin}>{tCommon('cabin')}</TabsTrigger>
        <TabsTrigger value={TAB_VALUES.contact}>
          {tCommon('contact')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={TAB_VALUES.home}>
        <HomeSection />
      </TabsContent>
      <TabsContent value={TAB_VALUES.yurt}>
        <YurtSection />
      </TabsContent>
      <TabsContent value={TAB_VALUES.cabin}>
        <CabinSection />
      </TabsContent>
      <TabsContent value={TAB_VALUES.contact}>
        <ContactSection />
      </TabsContent>
    </Tabs>
  )
}
