import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export const GET = async (request: NextRequest) => {
  const openingHoursData = await prisma.openingHours.findMany()

  return new NextResponse(JSON.stringify(openingHoursData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const PUT = async (request: NextRequest) => {
  // export async function updateOpeningHours(id: string, isCompleted: boolean) {
  //   try {
  //     const openingHours = await prisma.openingHours.update({
  //       where: { id },
  //       data: { isCompleted }
  //     })
  //     return { openingHours }
  //   } catch (error) {
  //     return { error }
  //   }
  // }
}
