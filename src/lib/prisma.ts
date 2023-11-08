import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

const isBrowser = typeof window !== 'undefined'

export const prisma = (
  isBrowser
    ? undefined
    : globalForPrisma.prisma ??
      new PrismaClient({
        log: ['query']
      })
) as PrismaClient

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
