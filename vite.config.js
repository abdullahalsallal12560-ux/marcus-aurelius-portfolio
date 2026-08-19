import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo from /marcus-aurelius-portfolio/, so asset
// URLs need that prefix there. Every other target — local dev, Vercel, any
// host serving from a domain root — stays on '/'. The Pages workflow is the
// only thing that sets GITHUB_PAGES, so nothing else has to know about this.
const base = process.env.GITHUB_PAGES ? '/marcus-aurelius-portfolio/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
