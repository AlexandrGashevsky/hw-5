import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from '../views/EventsView.vue'
import EventInformationView from '../views/EventInformationView.vue'
import ErrorView from '../views/ErrorView.vue'
import CreateEventsView from "../views/CreateEventsView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView
    },
    {
      path: "/events/:id",
      name: "eventPage",
      component: EventInformationView
    },
    {
      path: '/:catchAll(.*)',
      name: "errorPage",
      component: ErrorView
    },
    {
      path: '/create-event',
      name: "createEventPage",
      component: CreateEventsView
    }
  ],
});

export default router;
