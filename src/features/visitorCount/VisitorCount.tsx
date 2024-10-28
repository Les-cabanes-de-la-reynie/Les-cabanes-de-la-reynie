'use client'

import { env } from '@/lib/env'
import { isSameDay } from 'date-fns'
import { useEffect } from 'react'
import { LAST_VISIT_KEY } from './types'

const incrementVisitor = async (lastVisitDate: string | null) => {
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

export const VisitorCount = () => {
  useEffect(() => {
    const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)

    if (!lastVisitDate) {
      // First visit
      const newDate = Date.now().toString()

      incrementVisitor(lastVisitDate)
      return localStorage.setItem(LAST_VISIT_KEY, newDate)
    }

    const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

    if (!isVisitedToday) {
      const newDate = Date.now().toString()

      incrementVisitor(lastVisitDate)
      return localStorage.setItem(LAST_VISIT_KEY, newDate)
    }
  }, [])

  return <></>
}
