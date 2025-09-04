import { useAuthStore } from "../stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

// #######################
import SitePageNotFound from "../views/SitePageNotFound.vue";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ExtrasView from "../views/ExtrasView.vue";

import EpisodesView from "../views/EpisodesView.vue";
import EpisodesDetail from "../views/EpisodesDetail.vue";
import FinePrintView from "../views/FinePrintView.vue";

// import FirestoreRenamerView from "../views/FirestoreRenamerView.vue";
// import FirestoreFixerView from "../views/FirestoreFixerView.vue";
import RSSFeederView from "../views/RSSFeederView.vue";
import RSSRefeederView from "../views/RSSRefeederView.vue";

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
    path: "/extras",
    name: "extras",
    component: ExtrasView,
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
  // {
  //   path: "/firestore-renamer",
  //   name: "firestore-renamer",
  //   component: FirestoreRenamerView,
  // },
  // {
  //   path: "/firestore-fixer",
  //   name: "firestore-fixer",
  //   component: FirestoreFixerView,
  // },
  {
    path: "/rssfeeder",
    name: "rssfeeder",
    component: RSSFeederView,
  },
  {
    path: "/rssrefeeder",
    name: "rssrefeeder",
    component: RSSRefeederView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
