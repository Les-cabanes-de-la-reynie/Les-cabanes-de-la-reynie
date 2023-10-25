import { OpeningHoursDayData } from 'components/modules/OpeningHours/types'

export const getOpeningHours = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/openingHours`,
    {
      next: {
        revalidate: 30
      }
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch opening hours data')
  }

  const jsonData: OpeningHoursDayData[] = await res.json()
  return jsonData
}

export const updateOpeningHours = async (openingHoursDayData: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/openingHours/1`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: openingHoursDayData
    }
  )

  if (!res.ok) {
    throw new Error('Failed to update opening hours data')
  }

  const jsonData: OpeningHoursDayData = await res.json()
  return jsonData
}
