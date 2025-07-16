import { CabinSchema } from '@/features/accommodations/cabin/CabinSchema'
import {
  AuthenticatedRequest,
  withAuth
} from '@/shared/lib/auth-api-middleware'
import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

const CABIN_ID = 1

export const GET = async () => {
  try {
    const cabinList = await prisma.cabin.findMany({
      where: {
        id: CABIN_ID
      }
    })

    if (!cabinList || cabinList?.length === 0) {
      return new NextResponse(JSON.stringify({ error: 'Cabin not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // Return the first cabin in the list because we only have one cabin
    return new NextResponse(JSON.stringify(cabinList[0]), {
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
    const validationResult = CabinSchema.safeParse(body)

    if (!validationResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.errors
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const updatedCabin = await prisma.cabin.update({
      where: { id: CABIN_ID },
      data: {
        price: validationResult.data.price
      }
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Cabin updated successfully',
        cabin: updatedCabin
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
      JSON.stringify({ error: 'Failed to update cabin' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})
