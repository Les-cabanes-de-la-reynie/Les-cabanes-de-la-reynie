import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  // Delete existing data
  await prisma.visitorCount.deleteMany()
  await prisma.yurt.deleteMany()
  await prisma.hut.deleteMany()
  await prisma.address.deleteMany()
  await prisma.openingHours.deleteMany()

  // Default data
  const visitorCountData = { id: 1, count: 0 }
  const yurtData = { id: 1, price: 170 }
  const hutData = { id: 1, price: 170 }
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
    mondayStart: '2023-11-24T08:00:00.000Z',
    mondayEnd: '2023-11-24T20:00:00.000Z',
    tuesdayStart: '2023-11-24T08:00:00.000Z',
    tuesdayEnd: '2023-11-24T20:00:00.000Z',
    wednesdayStart: '2023-11-24T08:00:00.000Z',
    wednesdayEnd: '2023-11-24T20:00:00.000Z',
    thursdayStart: '2023-11-24T08:00:00.000Z',
    thursdayEnd: '2023-11-24T20:00:00.000Z',
    fridayStart: '2023-11-24T08:00:00.000Z',
    fridayEnd: '2023-11-24T20:00:00.000Z',
    saturdayStart: '2023-11-24T08:00:00.000Z',
    saturdayEnd: '2023-11-24T20:00:00.000Z',
    sundayStart: '2023-11-24T08:00:00.000Z',
    sundayEnd: '2023-11-24T20:00:00.000Z'
  } as const

  // Create data
  await prisma.visitorCount.create({ data: visitorCountData })
  await prisma.yurt.create({
    data: yurtData
  })
  await prisma.hut.create({
    data: hutData
  })
  await prisma.address.create({
    data: addressData
  })
  await prisma.openingHours.create({
    data: openingHoursData
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    // eslint-disable-next-line no-console
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
