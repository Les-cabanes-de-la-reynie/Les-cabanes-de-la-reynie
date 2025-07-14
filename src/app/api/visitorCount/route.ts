import { getVisitorCount } from '@/features/visitorCount/infrastructure/getVisitorCount'
import prisma from '@/shared/lib/prisma'
import { isSameDay } from 'date-fns'
import { NextResponse } from 'next/server'

const VISITOR_COUNT_ID = 1

export const GET = async () => {
  try {
    const data = await prisma.visitorCount.findMany({
      where: {
        id: VISITOR_COUNT_ID
      }
    })

    if (!data || data?.length === 0) {
      return new NextResponse(JSON.stringify(0), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    return new NextResponse(JSON.stringify(data[0].count), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    throw new Error(`Failed to fetch visitor count data. ${error}`)
  }
}

export const POST = async (request: Request) => {
  // disable visitor count update in development mode
  if (process.env.ENABLE_VISITOR_COUNT === 'false')
    return new NextResponse(
      JSON.stringify({ message: 'Visitor count update disabled' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  try {
    const lastVisitDate = await request.json()

    if (!lastVisitDate) {
      // First visit
      const visitorCount = await getVisitorCount()

      await prisma.visitorCount.update({
        where: { id: VISITOR_COUNT_ID },
        data: { count: visitorCount + 1 }
      })

      return new NextResponse(
        JSON.stringify({ message: 'Visitor count updated' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

    if (!isVisitedToday) {
      const visitorCount = await getVisitorCount()

      await prisma.visitorCount.update({
        where: { id: VISITOR_COUNT_ID },
        data: { count: visitorCount + 1 }
      })

      return new NextResponse(
        JSON.stringify({ message: 'Visitor count updated' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Same day so do nothing
    return new NextResponse(
      JSON.stringify({ message: 'Not visitor count update needed' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

    // eslint-disable-next-line
  } catch (error: any) {
    return new NextResponse('Error in updating visitor count' + error.message, {
      status: 500
    })
  }
}
