import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/conductor-app/' : '/',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Conductor TransCorp Lima', short_name: 'Conductor', description: 'Panel operativo para conductores',
      theme_color: '#0b1e36', background_color: '#f4f6f9', display: 'standalone', start_url: './',
      icons: [{ src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
    },
    workbox: { globPatterns: ['**/*.{js,css,html,svg,webmanifest}'] }
  })]
})
