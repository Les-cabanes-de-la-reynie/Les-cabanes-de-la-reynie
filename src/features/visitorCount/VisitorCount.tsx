'use client'

import { isSameDay } from 'date-fns/isSameDay'
import { useCallback, useEffect } from 'react'
import { updateVisitorCount } from './infrastructure/updateVisitorCount'
import { LAST_VISIT_KEY } from './types'

export const VisitorCount = () => {
  if (
    typeof window === 'undefined' ||
    process.env.ENABLE_VISITOR_COUNT !== 'true'
  )
    return null

  const handleVisitorCount = useCallback(async () => {
    try {
      const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)
      const now = Date.now()

      if (!lastVisitDate) {
        // First visit
        const newDate = now.toString()
        localStorage.setItem(LAST_VISIT_KEY, newDate)
        // API call not blocking (no await)
        updateVisitorCount(null).catch(console.error)
        return
      }

      const isVisitedToday = isSameDay(Number(lastVisitDate), now)

      if (!isVisitedToday) {
        const newDate = now.toString()
        localStorage.setItem(LAST_VISIT_KEY, newDate)
        // API call not blocking (no await)
        updateVisitorCount(lastVisitDate).catch(console.error)
      }
    } catch (error) {
      console.error('Error in VisitorCount:', error)
    }
  }, [])

  useEffect(() => {
    const scheduleVisitorCount = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(handleVisitorCount, { timeout: 2000 })
      } else {
        setTimeout(handleVisitorCount, 100)
      }
    }

    if (document.readyState === 'complete') {
      scheduleVisitorCount()
    } else {
      window.addEventListener('load', scheduleVisitorCount, { once: true })
    }

    return () => {
      window.removeEventListener('load', scheduleVisitorCount)
    }
  }, [handleVisitorCount])

  return null
}
