import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@constants', replacement: fileURLToPath(new URL('./src/constants/index.ts', import.meta.url)) },
      { find: '@types', replacement: fileURLToPath(new URL('./src/types/index.ts', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components/index.vue', import.meta.url)) },
      { find: '@store', replacement: fileURLToPath(new URL('./src/store/index.ts', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils/index.ts', import.meta.url)) },
      { find: '@services', replacement: fileURLToPath(new URL('./src/services/index.ts', import.meta.url)) },
      { find: '@router', replacement: fileURLToPath(new URL('./src/router/index.ts', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views/index.vue', import.meta.url)) },
      { find: '@images', replacement: fileURLToPath(new URL('./src/assets/images', import.meta.url)) },
      { find: '@icons', replacement: fileURLToPath(new URL('./src/assets/icons', import.meta.url)) },

    ],
  },
})
