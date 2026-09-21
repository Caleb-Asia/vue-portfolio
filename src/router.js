import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProfileView from "./views/ProfileView.vue";
import PortfolioView from "./views/PortfolioView.vue";
import SkillsView from "./views/SkillsView.vue";
import ContactView from "./views/ContactView.vue";
import HobbiesView from "./views/HobbiesView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/profile", name: "profile", component: ProfileView },
    { path: "/portfolio", name: "portfolio", component: PortfolioView },
    { path: "/skills", name: "skills", component: SkillsView },
    { path: "/hobbies", name: "hobbies", component: HobbiesView },
    { path: "/contact", name: "contact", component: ContactView },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
