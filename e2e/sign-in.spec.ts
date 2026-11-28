import { expect, test } from '@playwright/test'
import { baseURL, frenchURL } from '../playwright.config'

test.describe('Sign-in form', () => {
  test('should show each validation error with an icon', async ({ page }) => {
    await page.goto(`${frenchURL}/admin/auth/sign-in`)

    const emailError = page.getByText('Email invalide')
    const passwordError = page.getByText(
      'Le mot de passe doit contenir au moins 6 caractères.'
    )

    // The button only validates once React has hydrated it
    await expect(async () => {
      await page.getByRole('button', { name: 'Se connecter' }).click()
      await expect(emailError).toBeVisible({ timeout: 1_000 })
    }).toPass()

    await expect(passwordError).toBeVisible()
    // An error never relies on colour alone
    await expect(emailError.locator('svg')).toHaveCount(1)
    await expect(passwordError.locator('svg')).toHaveCount(1)
    await expect(page.getByPlaceholder('exemple@email.com')).toHaveAttribute(
      'aria-invalid',
      'true'
    )
  })
})

test.describe('Sign-up', () => {
  test.skip(
    ({ browserName, isMobile }) => browserName !== 'chromium' || isMobile,
    'The auth API is checked once, on Desktop Chrome'
  )

  test('should refuse to create an account', async ({ request }) => {
    // Too short a password: even if sign-up reopened, no account is created
    const response = await request.post('/api/auth/sign-up/email', {
      headers: { origin: baseURL },
      data: { name: 'Guard', email: 'sign-up-guard@example.com', password: 'x' }
    })

    expect(response.status()).toBe(400)
    expect((await response.json()).code).toBe('EMAIL_PASSWORD_SIGN_UP_DISABLED')
  })
})
