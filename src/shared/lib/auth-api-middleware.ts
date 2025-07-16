import { NextResponse } from 'next/server'
import { getSession } from './auth-serveur'

export interface AuthenticatedRequest extends Request {
  user: {
    id: string
    email: string
    name: string
  }
}

/**
 * Middleware to check authentication on API routes
 * @param handler - Function handler that receives the authenticated request
 * @returns NextResponse
 */
export const withAuth = (
  handler: (request: AuthenticatedRequest) => Promise<NextResponse>
) => {
  return async (request: Request): Promise<NextResponse> => {
    try {
      const session = await getSession()

      if (!session || !session.user || !session.user.email) {
        return new NextResponse(
          JSON.stringify({ error: 'Unauthorized - Authentication required' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }

      const authenticatedRequest = request as AuthenticatedRequest
      authenticatedRequest.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name || ''
      }

      return await handler(authenticatedRequest)
    } catch {
      return new NextResponse(
        JSON.stringify({ error: 'Internal server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }
}
