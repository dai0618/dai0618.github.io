import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/artwork",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtworkView.vue"),
  },
  {
    path: "/smc",
    name: "smc",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/artwork_folder/SmcView.vue"
      ),
  },
  {
    path: "/vfr",
    name: "vfr",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/artwork_folder/VfrView.vue"
      ),
  },
  {
    path: "/cl",
    name: "cl",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/artwork_folder/ClView.vue"
      ),
  },
  {
    path: "/xmc",
    name: "xmc",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/artwork_folder/XmcView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
