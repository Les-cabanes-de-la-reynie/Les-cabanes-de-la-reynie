import { OpeningHoursSchema } from '@/features/openingHours/OpeningHoursSchema'
import {
  AuthenticatedRequest,
  withAuth
} from '@/shared/lib/auth-api-middleware'
import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

const OPENING_HOURS_ID = 1

export const GET = async () => {
  try {
    const openingHoursList = await prisma.openingHours.findMany({
      where: {
        id: OPENING_HOURS_ID
      }
    })

    // Return the first opening hours in the list because we only have one opening hours
    return new NextResponse(JSON.stringify(openingHoursList[0]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const PUT = withAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json()
    const validationResult = OpeningHoursSchema.safeParse(body)

    if (!validationResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.message
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const updatedOpeningHours = await prisma.openingHours.update({
      where: { id: OPENING_HOURS_ID },
      data: validationResult.data
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Opening hours updated successfully',
        openingHours: updatedOpeningHours
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to update opening hours' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})
