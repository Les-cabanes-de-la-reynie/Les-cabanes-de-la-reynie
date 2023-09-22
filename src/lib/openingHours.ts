import prisma from './prisma'

// export async function getOpeningHours() {
//   try {
//     const openingHours = await prisma.openingHours.findMany()
//     return { openingHours }
//   } catch (error) {
//     return { error }
//   }
// }

// export async function updateOpeningHours(id: string, isCompleted: boolean) {
//   try {
//     const openingHours = await prisma.openingHours.update({
//       where: { id },
//       data: { isCompleted }
//     })
//     return { openingHours }
//   } catch (error) {
//     return { error }
//   }
// }
