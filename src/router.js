import { createRouter, createWebHistory } from "vue-router";
// ... your other imports ...

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/profile", name: "profile", component: ProfileView },
    { path: "/portfolio", name: "portfolio", component: PortfolioView },
    { path: "/skills", name: "skills", component: SkillsView },
    { path: "/hobbies", name: "hobbies", component: HobbiesView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/:pathMatch(.*)*", redirect: "/" } 
  ],
  scrollBehavior: () => ({ top: 0 }),
});