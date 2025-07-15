import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'

export const updateVisitorCount = async (lastVisitDate: string | null) => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.visitorCount}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lastVisitDate)
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to update visitor count data. ${error}`)
  }
}
