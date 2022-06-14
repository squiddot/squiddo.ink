import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
const HelloWorld = () => import("./pages/HelloWorld.vue");
const IndexChannel = () => import("./pages/IndexChannel.vue");
const MenuChannel = () => import("./pages/MenuChannel.vue");
const PortfolioChannel = () => import("./pages/PortfolioChannel.vue");
const ResumeChannel = () => import("./pages/ResumeChannel.vue");

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    name: "Home",
    component: IndexChannel,
    // meta: { buttonName: 'Home' }
  },
  {
    path: "/hello",
    name: "HelloWorld",
    component: HelloWorld,
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
