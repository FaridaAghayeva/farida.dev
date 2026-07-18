import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/Home.vue"), meta: { crumb: "~/home" } },
  { path: "/about", name: "about", component: () => import("../views/About.vue"), meta: { crumb: "~/about" } },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/Experience.vue"),
    meta: { crumb: "~/experience" },
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/Education.vue"),
    meta: { crumb: "~/education" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
    meta: { crumb: "~/projects" },
  },
  { path: "/awards", name: "awards", component: () => import("../views/Awards.vue"), meta: { crumb: "~/awards" } },
  {
    path: "/scholarships",
    name: "scholarships",
    component: () => import("../views/Scholarships.vue"),
    meta: { crumb: "~/scholarships" },
  },
  { path: "/socials", name: "socials", component: () => import("../views/Socials.vue"), meta: { crumb: "~/socials" } },
  { path: "/contact", name: "contact", component: () => import("../views/Contact.vue"), meta: { crumb: "~/contact" } },
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
