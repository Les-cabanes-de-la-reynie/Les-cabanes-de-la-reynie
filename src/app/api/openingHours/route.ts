import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export const GET = async () => {
  try {
    const openingHoursData = await prisma.openingHours.findMany()

    return NextResponse.json(openingHoursData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return NextResponse.json({ message: 'GET Error', error }, { status: 500 })
  }
}
