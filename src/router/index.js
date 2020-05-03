import Vue from "vue"
import VueRouter from "vue-router"
import VacationOverview from "@/views/VacationOverview.vue"
import VacationShow from "@/views/VacationShow.vue"
import VacationCreate from "@/views/VacationCreate.vue"
Vue.use(VueRouter)

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "VacationOverview",
    component: VacationOverview
  },
  {
    path: "/VacationCreate",
    name: "VacationCreate",
    component: VacationCreate
  },
  {
    path: "/VacationShow/:id",
    name: "VacationShow",
    component: VacationShow,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
