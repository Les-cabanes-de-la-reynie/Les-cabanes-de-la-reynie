'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs'
import { cn } from '@/shared/utils/tailwind'
import { useState } from 'react'

type AdminTabsProps = {
  homeContent: React.ReactNode
  yurtContent: React.ReactNode
  cabinContent: React.ReactNode
  contactContent: React.ReactNode
}

export const AdminTabs = ({
  homeContent,
  yurtContent,
  cabinContent,
  contactContent
}: AdminTabsProps) => {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='home'>Accueil</TabsTrigger>
        <TabsTrigger value='yurt'>Yourte</TabsTrigger>
        <TabsTrigger value='cabin'>Cabane</TabsTrigger>
        <TabsTrigger value='contact'>Contact</TabsTrigger>
      </TabsList>

      <TabsContent
        value='home'
        className={cn({ hidden: activeTab !== 'home' })}
      >
        {homeContent}
      </TabsContent>

      <TabsContent
        value='yurt'
        className={cn({ hidden: activeTab !== 'yurt' })}
      >
        {yurtContent}
      </TabsContent>

      <TabsContent
        value='cabin'
        className={cn({ hidden: activeTab !== 'cabin' })}
      >
        {cabinContent}
      </TabsContent>

      <TabsContent
        value='contact'
        className={cn({ hidden: activeTab !== 'contact' })}
      >
        {contactContent}
      </TabsContent>
    </Tabs>
  )
}
