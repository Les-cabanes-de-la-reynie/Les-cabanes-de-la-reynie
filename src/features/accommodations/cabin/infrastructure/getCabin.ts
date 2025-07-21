import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { Cabin } from '../_types'

export const getCabin = async (): Promise<Cabin> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.cabin}`,
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
    throw new Error(`Failed to fetch cabin data. ${error}`)
  }
}
