### vite aslind configuratsiyasini sozlash

<code>vite.config.ts</code>

```
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
})
```

_import { fileURLToPath, URL } from "url";_ bu erda node.js cor qismidan keladi uni o'rnatib olishni ko'ramiz

- ```
    npm i node types
  ```

- ```
     npm i url
  ```
 👆 bu bazan so'raladi vazyatga ko'ra install qilinishi mumkin 
- ```
    npm i --save-dev @types/node
  ```


<code>tsconfig.node.json</code>

```

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"],
    }
  },
  "include": ["vite.config.ts"]
}

```

```
"paths": {
      "@/*": ["./src/*"],
    }   // qo'shiladi 
```