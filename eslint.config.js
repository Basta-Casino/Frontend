import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Ignore certain directories
  { ignores: ['dist'] },
  {
    // Extend recommended ESLint and TypeScript configurations
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    
    // Define files to apply this config to (TypeScript and React files)
    files: ['**/*.{ts,tsx,jsx}'],
    
    languageOptions: {
      // Specify ECMAScript version
      ecmaVersion: 2020,
      
      // Set the environment globals (browser environment)
      globals: globals.browser,
      
      // Ensure ES modules are properly parsed
      sourceType: 'module',
    },
    
    plugins: {
      // React hooks linting plugin
      'react-hooks': reactHooks,
      
      // React fast-refresh linting plugin
      'react-refresh': reactRefresh,
    },
    
    rules: {
      // Enforce recommended rules for React hooks
      ...reactHooks.configs.recommended.rules,
      
      // Warn when components are exported incorrectly (useful for fast refresh in React)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
