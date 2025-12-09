import prisma from '@/shared/lib/prisma'
import { Address } from '../_types'

const ADDRESS_ID = 1

// Server-side function using Prisma (for SSG/SSR)
export const getAddressServer = async (): Promise<Address> => {
  const address = await prisma.address.findUnique({
    where: { id: ADDRESS_ID }
  })

  if (!address) {
    throw new Error('Address not found')
  }

  return address
}
