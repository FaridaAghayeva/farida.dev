import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../pages/Home.vue"), meta: { crumb: "~/home" } },
  { path: "/about", name: "about", component: () => import("../pages/About.vue"), meta: { crumb: "~/about" } },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../pages/Experience.vue"),
    meta: { crumb: "~/experience" },
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../pages/Education.vue"),
    meta: { crumb: "~/education" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../pages/Projects.vue"),
    meta: { crumb: "~/projects" },
  },
  { path: "/awards", name: "awards", component: () => import("../pages/Awards.vue"), meta: { crumb: "~/awards" } },
  { path: "/scholarships", redirect: "/awards" },
  { path: "/socials", name: "socials", component: () => import("../pages/Socials.vue"), meta: { crumb: "~/socials" } },
  { path: "/contact", name: "contact", component: () => import("../pages/Contact.vue"), meta: { crumb: "~/contact" } },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
