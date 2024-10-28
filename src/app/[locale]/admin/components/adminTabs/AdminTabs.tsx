import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import { ContactSection } from './ContactSection'
import { HomeSection } from './HomeSection'
import { HutSection } from './HutSection'
import { YurtSection } from './YurtSection'

export const AdminTabs = () => {
  const tCommon = useTranslations('Common')

  const TAB_VALUES = {
    home: 'home',
    yurt: 'yurt',
    hut: 'hut',
    contact: 'contact'
  }

  return (
    <Tabs defaultValue={TAB_VALUES.home}>
      <TabsList className='mb-10 w-full'>
        <TabsTrigger value={TAB_VALUES.home}>{tCommon('home')}</TabsTrigger>
        <TabsTrigger value={TAB_VALUES.yurt}>{tCommon('yurt')}</TabsTrigger>
        <TabsTrigger value={TAB_VALUES.hut}>{tCommon('hut')}</TabsTrigger>
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
      <TabsContent value={TAB_VALUES.hut}>
        <HutSection />
      </TabsContent>
      <TabsContent value={TAB_VALUES.contact}>
        <ContactSection />
      </TabsContent>
    </Tabs>
  )
}
