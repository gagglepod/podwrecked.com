import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 8888,
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    // Define other feature flags here if needed
  },
  plugins: [vue()],
});
