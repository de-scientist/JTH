import nextPlugin from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@next/next/no-img-element': 'off',
    },
  },
)
