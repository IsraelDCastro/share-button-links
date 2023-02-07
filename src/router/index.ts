import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ButtonsView from "@/views/ButtonsView.vue";
import IconButtonsView from "@/views/IconButtonsView.vue";
import ButtonGroup from "@/views/ButtonGroupView.vue";

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
  {
    path: "/icon-buttons",
    name: "Icon buttons",
    component: IconButtonsView
  },
  {
    path: "/button-group",
    name: "Button Group",
    component: ButtonGroup
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
