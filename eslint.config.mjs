import { FlatCompat } from '@eslint/eslintrc'
import pluginQuery from '@tanstack/eslint-plugin-query'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...pluginQuery.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals', 'next/typescript')
]

export default eslintConfig
