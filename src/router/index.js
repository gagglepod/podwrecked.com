import { useAuthStore } from "../stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

// #######################
import PageNotFound from "../views/PageNotFound.vue";
import HomeView from "../views/HomeView.vue";
import HowView from "../views/HowView.vue";
import PricingView from "../views/PricingView.vue";
import LabView from "../views/LabView.vue";
import SupportView from "../views/SupportView.vue";
import AboutView from "../views/AboutView.vue";
import PodfestView from "../views/PodfestView.vue";
import BlogView from "../views/BlogView.vue";
import BlogArticle from "../views/BlogArticle.vue";
import RightsView from "../views/RightsView.vue";
import TermsView from "../views/TermsView.vue";
import UptimeView from "../views/UptimeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticlesDetail from "../views/ArticlesDetail.vue";
import LearnView from "../views/LearnView.vue";
import CoursesListView from "../views/courses/CoursesListView.vue";
import CourseViewIntroToPodcastDesign from "../views/courses/CourseViewIntroToPodcastDesign.vue";

import CourseViewEpisodePlanningMasterclass from "../views/courses/CourseViewEpisodePlanningMasterclass.vue";
import LessonViewEpisodePlanningMasterclass01 from "../views/courses/LessonViewEpisodePlanningMasterclass01.vue";
import LessonViewEpisodePlanningMasterclass02 from "../views/courses/LessonViewEpisodePlanningMasterclass02.vue";

import VideosListView from "../views/videos/VideosListView.vue";
import VideoViewPodcastDesignPlan from "../views/videos/VideoViewPodcastDesignPlan.vue";
import VideoViewStopPodwrecking from "../views/videos/VideoViewStopPodwrecking.vue";
import VideoViewStoryHunting from "../views/videos/VideoViewStoryHunting.vue";
import VideoViewBrandPodcastDesign from "../views/videos/VideoViewBrandPodcastDesign.vue";
import VideoViewWeirdThing from "../views/videos/VideoViewWeirdThing.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/how-it-works",
    name: "how-it-works",
    component: HowView,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingView,
  },
  {
    path: "/lab",
    name: "lab",
    component: LabView,
  },

  {
    path: "/support",
    name: "support",
    component: SupportView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/podfest",
    name: "podfest",
    component: PodfestView,
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
    path: "/rights",
    name: "rights",
    component: RightsView,
  },
  {
    path: "/terms",
    name: "terms",
    component: TermsView,
  },
  {
    path: "/uptime",
    name: "uptime",
    component: UptimeView,
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
  {
    path: "/learn",
    name: "learn",
    component: LearnView,
  },
  {
    path: "/learn/courses",
    name: "courses",
    component: CoursesListView,
  },
  {
    path: "/learn/courses/intro-to-podcast-design",
    name: "CourseViewIntroToPodcastDesign",
    component: CourseViewIntroToPodcastDesign,
  },
  {
    path: "/learn/courses/episode-planning-masterclass",
    name: "CourseViewEpisodePlanningMasterclass",
    component: CourseViewEpisodePlanningMasterclass,
  },
  {
    path: "/learn/courses/episode-planning-masterclass/lesson-01",
    name: "LessonViewEpisodePlanningMasterclass01",
    component: LessonViewEpisodePlanningMasterclass01,
  },
  {
    path: "/learn/courses/episode-planning-masterclass/lesson-02",
    name: "LessonViewEpisodePlanningMasterclass02",
    component: LessonViewEpisodePlanningMasterclass02,
  },
  {
    path: "/learn/videos",
    name: "vidoes",
    component: VideosListView,
  },
  {
    path: "/learn/videos/video-podcast-design-plan",
    name: "VideoViewPodcastDesignPlan",
    component: VideoViewPodcastDesignPlan,
  },
  {
    path: "/learn/videos/video-stop-podwrecking",
    name: "VideoViewStopPodwrecking",
    component: VideoViewStopPodwrecking,
  },
  {
    path: "/learn/videos/video-story-hunting",
    name: "VideoViewStoryHunting",
    component: VideoViewStoryHunting,
  },
  {
    path: "/learn/videos/video-brand-podcast-design",
    name: "VideoViewBrandPodcastDesign",
    component: VideoViewBrandPodcastDesign,
  },
  {
    path: "/learn/videos/video-what-is-your-weird-thing",
    name: "VideoViewWeirdThing",
    component: VideoViewWeirdThing,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
