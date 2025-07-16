'use client'

import { isSameDay } from 'date-fns'
import { useCallback, useEffect } from 'react'
import { updateVisitorCount } from './infrastructure/updateVisitorCount'
import { LAST_VISIT_KEY } from './types'

export const VisitorCount = () => {
  const handleVisitorCount = useCallback(async () => {
    try {
      const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)

      if (!lastVisitDate) {
        // First visit
        const newDate = Date.now().toString()
        await updateVisitorCount(lastVisitDate)
        localStorage.setItem(LAST_VISIT_KEY, newDate)
        return
      }

      const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

      if (!isVisitedToday) {
        const newDate = Date.now().toString()
        await updateVisitorCount(lastVisitDate)
        localStorage.setItem(LAST_VISIT_KEY, newDate)
      }
    } catch (error) {
      console.error('Error in VisitorCount:', error)
    }
  }, [])

  useEffect(() => {
    // Use requestIdleCallback to defer execution
    if ('requestIdleCallback' in window) {
      requestIdleCallback(handleVisitorCount)
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(handleVisitorCount, 1000)
    }
  }, [handleVisitorCount])

  return null
}
