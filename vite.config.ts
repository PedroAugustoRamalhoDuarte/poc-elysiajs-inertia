import {defineConfig} from "vite";
import * as path from "path";
import ViteRuby from 'vite-plugin-ruby'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "public"),
    rollupOptions: {
      input: "src/client/entrypoints/application.jsx"
    }
  }
});