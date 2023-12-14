import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { auth } from "./firebase/config";
import { useAuthStore } from "./stores/AuthStore.js";

// global styles
import "./assets/css/styles.css";

// Pinia Store
const pinia = createPinia();
const app = createApp(App).use(pinia).use(router).mount("#app");
const authStore = useAuthStore();

// Using onAuthStateChanged with user parameter
auth.onAuthStateChanged((user) => {
  authStore.setup(user); // Ensure the setup method is executed
  if (!app) {
    createApp(App).use(pinia).use(router).mount("#app");
  }
});
