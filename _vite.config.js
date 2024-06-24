import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
// import rawPlugin from "vite-raw-plugin";

export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    // rawPlugin({
    //   fileRegex: /\.md$/,
    // }),
  ],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    "process.env": {},
    global: {},
  },
  // resolve: {
  //   alias: {
  //     buffer: "buffer",
  //   },
  // },
});
