import { db } from '@/lib/prisma'
import { getVisitorCount } from '@/services/queries/visitorCount'
import { isValid } from 'date-fns'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  try {
    const dateInMilliseconds = await request.json()

    if (!isValid(Number(dateInMilliseconds))) {
      return new NextResponse(JSON.stringify({ message: 'Invalid date' }), {
        status: 400
      })
    }

    const visitorCount = await getVisitorCount()

    const newVisitorCount = Number(visitorCount.count + 1)

    await db.visitorCount.update({
      where: { id: 1 },
      data: { count: newVisitorCount }
    })

    return new NextResponse(
      JSON.stringify({ message: 'Visitor count incremented' }),
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
