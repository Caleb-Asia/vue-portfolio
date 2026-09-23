import { createRouter, createWebHistory } from "vue-router";
// ... imports ...

export default createRouter({
  history: createWebHistory(), // <--- Back to standard history mode
  routes: [
    { path: "/", name: "home", component: HomeView },
    // ... your other routes ...
    { path: "/:pathMatch(.*)*", redirect: "/" } // Keep this, it's good practice
  ],
  scrollBehavior: () => ({ top: 0 }),
});