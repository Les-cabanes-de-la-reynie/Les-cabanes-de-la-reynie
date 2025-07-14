'use client'

import { isSameDay } from 'date-fns'
import { useEffect } from 'react'
import { updateVisitorCount } from './infrastructure/updateVisitorCount'
import { LAST_VISIT_KEY } from './types'

export const VisitorCount = () => {
  useEffect(() => {
    try {
      const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)

      if (!lastVisitDate) {
        // First visit
        const newDate = Date.now().toString()

        updateVisitorCount(lastVisitDate)
        return localStorage.setItem(LAST_VISIT_KEY, newDate)
      }

      const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

      if (!isVisitedToday) {
        const newDate = Date.now().toString()

        updateVisitorCount(lastVisitDate)
        return localStorage.setItem(LAST_VISIT_KEY, newDate)
      }
    } catch (error) {
      console.error('Error in VisitorCount:', error)
    }
  }, [])

  return <></>
}
