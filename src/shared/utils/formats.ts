export const transformLocaleToCountry = (locale: string) =>
  locale === 'fr' ? 'Français' : 'English'

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/\B(?=(\d{2})+(?!\d))(?<!\+3)|\B(?<=\+33)/g, ' ')
}
