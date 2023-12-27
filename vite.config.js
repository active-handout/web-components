// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig( ({ mode }) => {
  if (mode === "ssr-bundle") {
    return {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'ActiveHandoutComponents SSR',
          fileName: 'ah-components-ssr',
        },
        emptyOutDir: false,
        rollupOptions: {
          external: /.*lit.*/,
        },
      }
    };
  } else {
    return {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'ActiveHandoutComponents',
          fileName: 'ah-components',
        },
        emptyOutDir: false,
        rollupOptions: {
        },
      }
    };
  }
});


