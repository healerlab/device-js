import { defineConfig } from 'vite'
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "HDeviceJs",
      fileName: "h-device",
    },
  },
})
