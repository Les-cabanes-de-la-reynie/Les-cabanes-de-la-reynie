import prisma from 'lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = parseInt(params.id, 10)
    const body = await request.json()

    const openingHoursData = await prisma.openingHours.update({
      where: { id },
      data: body
    })

    if (!openingHoursData) {
      return new NextResponse('No openingHoursData found', { status: 404 })
    }

    return NextResponse.json(openingHoursData)
  } catch (error) {
    return NextResponse.json({ message: 'PUT Error', error }, { status: 500 })
  }
}
