import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { Yurt } from '../_types'

export const updateYurt = async (yurt: Yurt): Promise<Yurt> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.yurt}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(yurt)
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to update yurt. ${error}`)
  }
}
