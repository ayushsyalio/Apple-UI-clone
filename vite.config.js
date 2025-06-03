import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-30z",
    project: "javascript-react",
    base:process.env.VITE_BASE_PATH || "/Apple-UI-clone"
  })],

  build: {
    sourcemap: true
  }
})