// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { PrismaClient } from '@prisma/client'

export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error']
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
