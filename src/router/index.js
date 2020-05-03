import Vue from "vue"
import VueRouter from "vue-router"
import VacationOverview from "@/views/VacationOverview.vue"
import VacationShow from "@/views/VacationShow.vue"
import VacationCreate from "@/views/VacationCreate.vue"
import error from "@/views/error.vue"
Vue.use(VueRouter)

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
    path: "*",
    name: "error",
    component: error
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
