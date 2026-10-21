import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/profile", redirect: { path: "/", hash: "#about" } },
    { path: "/portfolio", redirect: { path: "/", hash: "#portfolio" } },
    { path: "/skills", redirect: { path: "/", hash: "#skills" } },
    { path: "/hobbies", redirect: { path: "/", hash: "#hobbies" } },
    { path: "/contact", redirect: { path: "/", hash: "#contact" } },
    { path: "/:pathMatch(.*)*", redirect: "/" }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      return { el: to.hash, top: 104, behavior };
    }
    return { top: 0 };
  },
});
