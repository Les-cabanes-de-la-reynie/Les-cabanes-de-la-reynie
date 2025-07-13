import { getVisitorCount } from '@/features/visitorCount/infrastructure/getVisitorCount'
import prisma from '@/shared/lib/prisma'
import { isSameDay } from 'date-fns'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  try {
    const lastVisitDate = await request.json()

    if (!lastVisitDate) {
      // First visit
      const visitorCount = await getVisitorCount()

      await prisma.visitorCount.update({
        where: { id: 1 },
        data: { count: visitorCount.count + 1 }
      })

      return new NextResponse(
        JSON.stringify({ message: 'Visitor count incremented' }),
        { status: 200 }
      )
    }

    const isVisitedToday = isSameDay(Number(lastVisitDate), Date.now())

    if (!isVisitedToday) {
      const visitorCount = await getVisitorCount()

      await prisma.visitorCount.update({
        where: { id: 1 },
        data: { count: visitorCount.count + 1 }
      })

      return new NextResponse(
        JSON.stringify({ message: 'Visitor count incremented' }),
        { status: 200 }
      )
    }

    // Same day so do nothing
    return new NextResponse(
      JSON.stringify({ message: 'Not visitor count incrementation needed' }),
      { status: 200 }
    )

    // eslint-disable-next-line
  } catch (error: any) {
    return new NextResponse(
      'Error in incrementing visitor count' + error.message,
      {
        status: 500
      }
    )
  }
}
