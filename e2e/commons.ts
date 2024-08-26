import { Page } from '@playwright/test'

export const openBurgerMenu = async (page: Page) => {
  return page.getByTestId('open-burger-menu-button').click()
}

export const closeBurgerMenu = async (page: Page) => {
  return page.getByTestId('close-sheet-button').click()
}
