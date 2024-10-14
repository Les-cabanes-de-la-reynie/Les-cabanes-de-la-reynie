'use client'

import { LAST_VISIT_KEY } from '@/_constants/visitorCount'
import { env } from '@/lib/env'
import { isSameDay } from 'date-fns'
import { useEffect } from 'react'

const incrementVisitor = async (lastVisitDate: string) => {
  const url = `${env.NEXT_PUBLIC_BASE_URL}/api/visitorCount`

  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lastVisitDate)
  })
}

const VisitorCount = () => {
  useEffect(() => {
    const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)

    if (!lastVisitDate) {
      // First visit
      const newDate = Date.now().toString()

      incrementVisitor(newDate)
      return localStorage.setItem(LAST_VISIT_KEY, newDate)
    }
    
    const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

    if (!isVisitedToday) {
      const newDate = Date.now().toString()

      incrementVisitor(newDate)
      return localStorage.setItem(LAST_VISIT_KEY, newDate)
    }
  }, [])

  return <></>
}
export default VisitorCount
