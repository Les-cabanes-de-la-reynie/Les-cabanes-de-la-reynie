import { SignInSchema } from '@/features/auth/SignInSchema'
import { auth } from '@/shared/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validationResult = SignInSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid credentials',
          details: validationResult.error.errors
        },
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { email, password } = validationResult.data

    const result = await auth.api.signInEmail({
      body: { email, password }
    })

    return NextResponse.json(
      { message: 'Sign in successful', user: result.user },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Sign in error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
