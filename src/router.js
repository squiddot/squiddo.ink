import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
const IndexChannel = () => import("./pages");
const MenuChannel = () => import("./pages/Menu.vue");
const PortfolioChannel = () => import("./pages/About.vue");
const ResumeChannel = () => import("./pages/ColorBars.vue");
const Off = () => import("./pages/Off.vue");

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    name: "Off",
    component: Off,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/on",
    name: "Home",
    component: IndexChannel,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuChannel,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioChannel,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumeChannel,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
