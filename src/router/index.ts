import { createRouter, createWebHistory } from "vue-router";

import Scale from "../components/Scale.vue";
import Translate from "../components/Translate.vue";
import Rotate from "../components/Rotate.vue";

const routes = [
  {
    path: "/",
    name: "Translate",
    component: Translate,
  },
  {
    path: "/scale",
    name: "Scale",
    component: Scale,
  },
  {
    path: "/rotate",
    name: "Rotate",
    component: Rotate,
  },
  {
    path: "/skew",
    name: "Skew",
    component: Scale,
  },
  {
    path: "/matrix",
    name: "Matriz",
    component: Scale,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
