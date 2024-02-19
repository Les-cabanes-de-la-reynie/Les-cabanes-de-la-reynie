import { expect, test } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  frenchURL
} from '../playwright.config'
import { openBurgerMenu } from './commons'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Map', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test.beforeEach(async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByRole('link', { name: 'Contact' }).click()
      await page.waitForURL('**/contact')
    })

    test('should display the map on the contact page', async ({ page }) => {
      await expect(page.locator('.leaflet-popup-content-wrapper')).toBeVisible()
    })

    test('should display itinerary on the popup', async ({ page }) => {
      const itinerary = page.getByTestId('itinerary-link')

      await expect(itinerary).toBeVisible()
      await itinerary.click()

      // Enter in the popover and check if the google map link is visible
      await expect(
        page.getByRole('link', { name: 'Voir itinéraire' })
      ).toBeVisible()
    })

    test('should display the phone number on the popup', async ({ page }) => {
      await expect(page.getByTestId('phone-number')).toBeVisible()
    })

    test('should display the email on the popup', async ({ page }) => {
      await expect(page.getByTestId('map-address-email')).toBeVisible()
    })
  })

  test.describe('Desktop', () => {
    // Change viewport in desktop size
    test.use({ viewport: DESKTOP_VIEWPORT })

    test.beforeEach(async ({ page }) => {
      await page.getByRole('link', { name: 'Contact' }).click()
      await page.waitForURL('**/contact')
    })

    test('should display the map on the contact page', async ({ page }) => {
      await expect(page.locator('.leaflet-popup-content-wrapper')).toBeVisible()
    })

    test('should display itinerary on the popup', async ({ page }) => {
      const itinerary = page.getByTestId('itinerary-link')

      await expect(itinerary).toBeVisible()
      await itinerary.click()

      // Enter in the popover and check if the google map link is visible
      await expect(
        page.getByRole('link', { name: 'Voir itinéraire' })
      ).toBeVisible()
    })

    test('should display the phone number on the popup', async ({ page }) => {
      await expect(page.getByTestId('phone-number')).toBeVisible()
    })

    test('should display the email on the popup', async ({ page }) => {
      await expect(page.getByTestId('map-address-email')).toBeVisible()
    })
  })
})
