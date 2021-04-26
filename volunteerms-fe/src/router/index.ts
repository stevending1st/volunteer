// createWebHashHistory
// import component from "*.vue";
// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { createRouter,  createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/login"
    component: () => import("@/views/layout/Layout.vue"),
    children: [
      {
        path: "/Home",
        component: () => import("@/views/layout/Main/Home/Home.vue")
      },
      {
        path: "/activitySquare",
        component: () =>
          import("@/views/layout/Main/ActivitySquare/ActivitySquare.vue")
      },
      {
        path: "/activity/myActivity",
        component: () =>
          import("@/views/layout/Main/Activity/MyActivity/MyActivity.vue")
      },
      {
        path: "/activity/createActivity",
        component: () =>
          import(
            "@/views/layout/Main/Activity/CreateActivity/CreateActivity.vue"
          )
      },
      {
        path: "/activity/ActivityVerify",
        component: () =>
          import(
            "@/views/layout/Main/Activity/ActivityVerify/ActivityVerify.vue"
          )
      },
      {
        path: "/manage/company",
        component: () =>
          import("@/views/layout/Main/Manage/Company/Company.vue")
      },
      {
        path: "/manage/unit",
        component: () => import("@/views/layout/Main/Manage/Unit/Unit.vue")
      },
      {
        path: "/Docs",
        component: () => import("@/views/layout/Main/Docs/Docs.vue")
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
    path: "/404",
    component: () => import("@/views/404.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else if (localStorage.getItem("token") !== null) {
    if (to.matched.length === 0) {
      next({
        path: "/404"
      });
    } else if (to.path === "/") {
      next({
        path: "/Home"
      });
    } else {
      next();
    }
  } else {
    next({
      path: "/login"
    });
  }
});

export default router;
