import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/Auth/LoginForm.vue";
import RegisterForm from "../components/Auth/RegisterForm.vue";
import Portfolio from "../views/PortfolioView.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterForm,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Proteger rutas que requieren autenticación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
