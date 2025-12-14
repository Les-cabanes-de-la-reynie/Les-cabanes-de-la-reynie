'use client'

import { isSameDay } from 'date-fns/isSameDay'
import { useEffect } from 'react'
import { LAST_VISIT_LS_KEY } from '../_const'
import { updateVisitorCount } from '../infrastructure/actions/updateVisitorCount'

export const VisitorCount = () => {
  const handleVisitorCount = async () => {
    try {
      const lastVisitDate = localStorage.getItem(LAST_VISIT_LS_KEY)
      const now = Date.now().toString()

      if (!lastVisitDate) {
        // First visit
        localStorage.setItem(LAST_VISIT_LS_KEY, now)
        await updateVisitorCount()
        return
      }

      const isVisitedToday = isSameDay(Number(lastVisitDate), now)

      if (!isVisitedToday) {
        localStorage.setItem(LAST_VISIT_LS_KEY, now)
        await updateVisitorCount()
      }
    } catch (error) {
      console.error('Error in VisitorCount:', error)
    }
  }

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
