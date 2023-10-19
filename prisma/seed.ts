import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const main = async () => {
  const openingHours = {
    mondayStart: faker.defaultRefDate(),
    mondayEnd: faker.defaultRefDate(),
    tuesdayStart: faker.defaultRefDate(),
    tuesdayEnd: faker.defaultRefDate(),
    wednesdayStart: faker.defaultRefDate(),
    wednesdayEnd: faker.defaultRefDate(),
    thursdayStart: faker.defaultRefDate(),
    thursdayEnd: faker.defaultRefDate(),
    fridayStart: faker.defaultRefDate(),
    fridayEnd: faker.defaultRefDate(),
    saturdayStart: faker.defaultRefDate(),
    saturdayEnd: faker.defaultRefDate(),
    sundayStart: faker.defaultRefDate(),
    sundayEnd: faker.defaultRefDate()
  } as const

  await prisma.openingHours.create({
    data: openingHours
  })

  await prisma.visitorCount.create({ data: { count: 0 } })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async err => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  })
