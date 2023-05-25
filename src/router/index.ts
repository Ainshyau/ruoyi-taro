import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "",
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../pages/tabbar/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    name: "user",
    path: "/user",
    component: () => import("../pages/tabbar/user/index.vue"),
    meta: { title: "我的" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
