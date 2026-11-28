import { PrismaPg } from '@prisma/adapter-pg'
import { attachDatabasePool } from '@vercel/functions'
import { Pool } from 'pg'
import { PrismaClient } from '../../app/generated/prisma/client'

// pg already treats these modes as verify-full and warns on every connection
const connectionString = process.env.DATABASE_URL!.replace(
  /sslmode=(prefer|require|verify-ca)/,
  'sslmode=verify-full'
)

const pool = new Pool({ connectionString })

// Let Vercel's runtime drain idle connections before an instance suspends
attachDatabasePool(pool)

const adapter = new PrismaPg(pool)

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
