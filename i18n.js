module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/[lang]': ['home', 'navigation', 'footer'],
    '/[lang]/delivery': ['delivery'],
    '/[lang]/restaurants': ['restaurants']
  }
}
