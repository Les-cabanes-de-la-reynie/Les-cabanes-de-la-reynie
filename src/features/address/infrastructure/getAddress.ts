import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { Address } from '../_types'

export const getAddress = async (): Promise<Address> => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.address}`,
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
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
