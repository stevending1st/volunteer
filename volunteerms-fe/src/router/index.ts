// createWebHashHistory
// import component from "*.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/login"
    component: () => import("@/views/layout/Layout.vue"),
    children: [
      {
        path: "/manage/company",
        component: () => import("@/views/layout/Main/Manage/Company/Company.vue")
      },
      {
        path: "/manage/unit",
        component: () => import("@/views/layout/Main/Manage/Unit/Unit.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/user/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/user/Register.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
