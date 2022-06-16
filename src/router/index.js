import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import EventInformationView from "../views/EventInformationView.vue";
import ErrorView from "../views/ErrorView.vue";
const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/events/:id",
      name: "eventPage",
      component: EventInformationView,
    },
    {
      path: "/:catchAll(.*)",
      name: "errorPage",
      component: ErrorView,
    },
  ],
});

export default router;
