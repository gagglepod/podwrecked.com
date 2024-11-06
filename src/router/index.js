import { useAuthStore } from "../stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

// #######################
import SitePageNotFound from "../views/SitePageNotFound.vue";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BoostView from "../views/BoostView.vue";

// import EpisodesView from "../views/EpisodesView.vue";
import EpisodesView from "../views/EpisodesView.vue";
import EpisodesDetail from "../views/EpisodesDetail.vue";

import FinePrintView from "../views/FinePrintView.vue";

import FiresaleView from "../views/FiresaleView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "SitePageNotFound",
    component: SitePageNotFound,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/boosts",
    name: "boosts",
    component: BoostView,
  },
  {
    path: "/fine-print",
    name: "fine-print",
    component: FinePrintView,
  },
  {
    path: "/episodes",
    name: "episodes",
    component: EpisodesView,
  },
  {
    path: "/episodes/:slug",
    name: "EpisodesDetail",
    component: EpisodesDetail,
    props: true,
  },
  {
    path: "/firesale",
    name: "firesale",
    component: FiresaleView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
