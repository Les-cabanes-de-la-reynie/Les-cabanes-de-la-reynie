'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs'
import { cn } from '@/shared/utils/tailwind'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

type AdminTabsProps = {
  homeContent: React.ReactNode
  yurtContent: React.ReactNode
  cabinContent: React.ReactNode
  findUsContent: React.ReactNode
}

export const AdminTabs = ({
  homeContent,
  yurtContent,
  cabinContent,
  findUsContent
}: AdminTabsProps) => {
  const tCommon = useTranslations('Common')

  const [activeTab, setActiveTab] = useState('home')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='home'>{tCommon('home')}</TabsTrigger>
        <TabsTrigger value='yurt'>{tCommon('yurt')}</TabsTrigger>
        <TabsTrigger value='cabin'>{tCommon('cabin')}</TabsTrigger>
        <TabsTrigger value='find-us'>{tCommon('findUs')}</TabsTrigger>
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
        value='find-us'
        className={cn({ hidden: activeTab !== 'find-us' })}
      >
        {findUsContent}
      </TabsContent>
    </Tabs>
  )
}
