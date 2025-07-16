import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { OpeningHoursData } from '../_types'

export const updateOpeningHours = async (
  openingHours: OpeningHoursData
): Promise<OpeningHoursData> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.openingHours}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(openingHours)
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to update opening hours. ${error}`)
  }
}
