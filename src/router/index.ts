import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ButtonsView from "@/views/ButtonsView.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: ButtonsView
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
