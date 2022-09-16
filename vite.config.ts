import react from "@vitejs/plugin-react";
import { defineConfig, UserConfigExport } from "vite";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);
console.log("PROJECT ROOT DIR");
console.log(projectRootDir);

// https://vitejs.dev/config/
const config: UserConfigExport = {
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
};
export default defineConfig(config);
