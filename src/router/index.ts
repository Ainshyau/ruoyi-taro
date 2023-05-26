import { createRouter, createWebHistory } from "vue-router";
import createRouteGuard from "./guard";

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
    meta: { title: "首页", auth: false },
  },
  {
    name: "user",
    path: "/user",
    component: () => import("../pages/tabbar/user/index.vue"),
    meta: { title: "我的", auth: true },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../pages/login/index.vue"),
    meta: { title: "登录", auth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createRouteGuard(router);

export default router;
