import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Portfolio from "@/views/Portfolio.vue";
import store from "@/store";

const routes = [
  { path: "/", component: Login },
  {
    path: "/portfolio",
    component: Portfolio,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
