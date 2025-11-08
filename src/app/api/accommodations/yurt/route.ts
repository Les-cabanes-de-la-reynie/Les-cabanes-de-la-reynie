import { YurtSchema } from '@/features/accommodations/yurt/YurtSchema'
import {
  AuthenticatedRequest,
  withAuth
} from '@/shared/lib/auth-api-middleware'
import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

const YURT_ID = 1

export const GET = async () => {
  try {
    const yurtList = await prisma.yurt.findMany({
      where: {
        id: YURT_ID
      }
    })

    // Return the first yurt in the list because we only have one yurt
    return new NextResponse(JSON.stringify(yurtList[0]), {
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
    const validationResult = YurtSchema.safeParse(body)

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

    const updatedYurt = await prisma.yurt.update({
      where: { id: YURT_ID },
      data: {
        price: validationResult.data.price
      }
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Yurt updated successfully',
        yurt: updatedYurt
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
      JSON.stringify({ error: 'Failed to update yurt' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})
