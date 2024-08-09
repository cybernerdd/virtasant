import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SecretView from "@/views/SecretView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/secret/:token",
      name: "secret",
      component: SecretView,
      props: true,
    },
  ],
});

export default router;
