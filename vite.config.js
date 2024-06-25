import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    "process.env": {},
    global: {},
  },
});
