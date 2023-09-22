import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  // const openingHours = prisma.

  return new NextResponse(JSON.stringify({ AVAILABLE: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
