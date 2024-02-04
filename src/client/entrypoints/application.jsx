import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

console.log("Hello from application.jsx")
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('../Pages/**/*.tsx', { eager: true })
    return pages[`../Pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})