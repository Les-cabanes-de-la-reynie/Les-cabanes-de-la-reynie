import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { prisma: ReturnType<typeof createPrisma> }

function createPrisma() {
  return new PrismaClient().$extends(withAccelerate())
}

const prisma = globalForPrisma.prisma ?? createPrisma()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
