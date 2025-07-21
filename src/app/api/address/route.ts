import { AddressSchema } from '@/features/address/AddressSchema'
import {
  AuthenticatedRequest,
  withAuth
} from '@/shared/lib/auth-api-middleware'
import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

const ADDRESS_ID = 1

export const GET = async () => {
  try {
    const addressList = await prisma.address.findMany({
      where: {
        id: ADDRESS_ID
      }
    })

    // Return the first address in the list because we only have one address
    return new NextResponse(JSON.stringify(addressList[0]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const PUT = withAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json()
    const validationResult = AddressSchema.safeParse(body)

    if (!validationResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.errors
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const { streetAddress, postalCode, city, country, phone, email } =
      validationResult.data

    const updatedAddress = await prisma.address.update({
      where: { id: ADDRESS_ID },
      data: {
        streetAddress,
        postalCode,
        city,
        country,
        phone,
        email
      }
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Address updated successfully',
        address: updatedAddress
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to update address' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
})
