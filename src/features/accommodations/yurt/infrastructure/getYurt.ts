import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { Yurt } from '../_types'

export const getYurt = async (): Promise<Yurt> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.yurt}`,
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
    throw new Error(`Failed to fetch yurt data. ${error}`)
  }
}
