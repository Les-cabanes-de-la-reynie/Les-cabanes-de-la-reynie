module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': [],
    '/[lang]': ['home', 'navigation', 'footer'],
    '/[lang]/delivery': ['delivery'],
    '/[lang]/products/[id]': ['product'],
    '/[lang]/products/category/[category]': ['product'],
    '/[lang]/restaurants': ['restaurants']
  }
}
