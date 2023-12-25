import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const openingHours = {
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

  const yurtHeaderImage = {
    imageKey: '4f61bfe9-89ef-4d30-8c17-f811c2ee1afb-b7gpjb.webp',
    imageUrl:
      'https://utfs.io/f/19e79594-ed0b-41b4-a74e-0a6c5eda386a-b7gpjb.webp',
    category: UploadImageCategoryKeyEnum.YurtHeader
  } as const

  await prisma.openingHours.create({
    data: openingHours
  })

  await prisma.visitorCount.create({ data: { count: 0 } })

  await prisma.image.create({
    data: { ...yurtHeaderImage }
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
