import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      "testdatadid-ton.memolabs.net", // 允许该域名
      "datadid-ton.memolabs.net",
      "localhost", // 默认允许 localhost
    ],
  },
})
