export const formatNumberToPrice = (number: number) =>
  new Intl.NumberFormat('fr', {
    style: 'currency',
    currency: 'EUR'
  }).format(number)
