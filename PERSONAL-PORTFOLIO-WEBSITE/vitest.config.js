import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'c8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
    },
    // For TypeScript projects:
    typecheck: {
      checker: 'tsc'
    }
  }
})