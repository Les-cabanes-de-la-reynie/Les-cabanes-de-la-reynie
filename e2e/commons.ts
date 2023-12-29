import { Page } from '@playwright/test'

export const openBurgerMenu = async (page: Page) => {
  return page.getByLabel('Ouvrir le menu').click()
}
export const closeBurgerMenu = async (page: Page) => {
  return page.getByLabel('Fermer le menu').click()
}
