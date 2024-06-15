import { useAuthStore } from "../stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

// #######################
import SitePageNotFound from "../views/SitePageNotFound.vue";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BoostView from "../views/BoostView.vue";

import BlogView from "../views/BlogView.vue";
import BlogArticle from "../views/BlogArticle.vue";

import ArticlesView from "../views/ArticlesView.vue";
import ArticlesDetail from "../views/ArticlesDetail.vue";

import FooterLicensesView from "../views/FooterLicensesView.vue";
import FooterDisclaimerView from "../views/FooterDisclaimerView.vue";

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
    path: "/blog",
    name: "blog",
    component: BlogView,
    props: true,
  },
  {
    path: "/blog/:id",
    name: "BlogArticle",
    component: BlogArticle,
    props: true,
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    component: FooterDisclaimerView,
  },
  {
    path: "/licenses",
    name: "licenses",
    component: FooterLicensesView,
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
  {
    path: "/articles/:slug",
    name: "ArticlesDetail",
    component: ArticlesDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
