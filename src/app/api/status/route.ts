import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextRequest, NextResponse } from 'next/server'

export const GET = withApiAuthRequired(async (request: NextRequest) => {
  return new NextResponse(JSON.stringify({ AVAILABLE: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
})
