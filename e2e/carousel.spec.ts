import { expect, test } from '@playwright/test'
import { MOBILE_VIEWPORT, frenchURL } from '../playwright.config'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Carousel', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test('should open and close image with fslightbox library', async ({
      page
    }) => {
      await expect(page).toHaveURL(frenchURL)

      const firstImage = page.getByRole('img', { name: 'Our fabulous place 0' })
      const closeFslightboxButton = page.getByTitle('Close')
      const fullscreenFslightboxButton = page.getByTitle('Enter fullscreen')

      await expect(closeFslightboxButton).not.toBeVisible()
      await expect(fullscreenFslightboxButton).not.toBeVisible()

      // Open image with fslightbox
      await firstImage.click({ delay: 1000 })

      await expect(closeFslightboxButton).toBeVisible()
      await expect(fullscreenFslightboxButton).toBeVisible()
    })

    test('should switch image with previous and next button', async ({
      page
    }) => {
      await expect(page).toHaveURL(frenchURL)

      const firstImage = page.getByRole('img', { name: 'Our fabulous place 0' })
      const nextButton = page.getByTestId('carousel-next-button')
      const previousButton = page.getByTestId('carousel-previous-button')

      await expect(firstImage).toBeInViewport()

      await nextButton.click({ delay: 2000, clickCount: 1 })
      await expect(firstImage).not.toBeInViewport()

      await previousButton.click({ delay: 2000, clickCount: 1 })
      await expect(firstImage).toBeInViewport()
    })
  })
})
