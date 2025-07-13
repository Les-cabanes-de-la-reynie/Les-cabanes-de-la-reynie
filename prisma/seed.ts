import { PrismaClient } from '@prisma/client'
import { auth } from '../src/shared/lib/auth'

const prisma = new PrismaClient()

const main = async () => {
  // Delete existing data
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
  await prisma.visitorCount.deleteMany()
  await prisma.yurt.deleteMany()
  await prisma.cabin.deleteMany()
  await prisma.address.deleteMany()
  await prisma.openingHours.deleteMany()

  // Default data
  const visitorCountData = { id: 1, count: 0 }
  const yurtData = { id: 1, price: 170 }
  const cabinData = { id: 1, price: 170 }
  const addressData = {
    id: 1,
    streetAddress: '',
    postalCode: '19310',
    city: 'Louignac',
    country: 'France',
    phone: '0611805351',
    email: 'example-les-cabanes-de-la-reynie@hotmail.fr'
  }

  const openingHoursData = {
    id: 1,
    mondayStart: new Date('2023-11-24T08:00:00.000Z'),
    mondayEnd: new Date('2023-11-24T20:00:00.000Z'),
    tuesdayStart: new Date('2023-11-24T08:00:00.000Z'),
    tuesdayEnd: new Date('2023-11-24T20:00:00.000Z'),
    wednesdayStart: new Date('2023-11-24T08:00:00.000Z'),
    wednesdayEnd: new Date('2023-11-24T20:00:00.000Z'),
    thursdayStart: new Date('2023-11-24T08:00:00.000Z'),
    thursdayEnd: new Date('2023-11-24T20:00:00.000Z'),
    fridayStart: new Date('2023-11-24T08:00:00.000Z'),
    fridayEnd: new Date('2023-11-24T20:00:00.000Z'),
    saturdayStart: new Date('2023-11-24T08:00:00.000Z'),
    saturdayEnd: new Date('2023-11-24T20:00:00.000Z'),
    sundayStart: new Date('2023-11-24T08:00:00.000Z'),
    sundayEnd: new Date('2023-11-24T20:00:00.000Z')
  }

  try {
    // Create data with error handling
    await prisma.visitorCount.create({ data: visitorCountData })
    await prisma.yurt.create({ data: yurtData })
    await prisma.cabin.create({ data: cabinData })
    await prisma.address.create({ data: addressData })
    await prisma.openingHours.create({ data: openingHoursData })

    // Create user and account
    const ctx = await auth.$context
    const hashedPassword = await ctx.password.hash('fakepassword')

    const user = await prisma.user.create({
      data: {
        id: 'default-admin-id',
        email: 'fakeemail',
        name: 'Admin',
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await prisma.account.create({
      data: {
        id: 'default-admin-account-id',
        userId: user.id,
        providerId: 'credential',
        accountId: user.id,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error during seed:', error)
    throw error
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
