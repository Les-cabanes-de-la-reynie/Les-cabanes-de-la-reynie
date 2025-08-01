import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { OpeningHoursData } from '../_types'

export const getOpeningHours = async (): Promise<OpeningHoursData> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.openingHours}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to fetch opening hours data. ${error}`)
  }
}
