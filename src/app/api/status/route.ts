import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  return new NextResponse(JSON.stringify({ AVAILABLE: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
