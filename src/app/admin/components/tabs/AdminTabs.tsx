'use client'

import { Loader } from '@/shared/components/Loader'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs'
import { cn } from '@/shared/utils/tailwind'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const HomeSection = dynamic(
  () => import('./HomeSection').then(m => ({ default: m.HomeSection })),
  {
    loading: () => <Loader />
  }
)

const YurtSection = dynamic(
  () => import('./YurtSection').then(m => ({ default: m.YurtSection })),
  {
    loading: () => <Loader />
  }
)

const CabinSection = dynamic(
  () => import('./CabinSection').then(m => ({ default: m.CabinSection })),
  {
    loading: () => <Loader />
  }
)

const ContactSection = dynamic(
  () => import('./ContactSection').then(m => ({ default: m.ContactSection })),
  {
    loading: () => <Loader />
  }
)

export const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='home'>Home</TabsTrigger>
        <TabsTrigger value='yurt'>Yourte</TabsTrigger>
        <TabsTrigger value='cabin'>Cabane</TabsTrigger>
        <TabsTrigger value='contact'>Contact</TabsTrigger>
      </TabsList>

      <TabsContent
        value='home'
        className={cn({ hidden: activeTab !== 'home' })}
      >
        <HomeSection />
      </TabsContent>

      <TabsContent
        value='yurt'
        className={cn({ hidden: activeTab !== 'yurt' })}
      >
        <YurtSection />
      </TabsContent>

      <TabsContent
        value='cabin'
        className={cn({ hidden: activeTab !== 'cabin' })}
      >
        <CabinSection />
      </TabsContent>

      <TabsContent
        value='contact'
        className={cn({ hidden: activeTab !== 'contact' })}
      >
        <ContactSection />
      </TabsContent>
    </Tabs>
  )
}
