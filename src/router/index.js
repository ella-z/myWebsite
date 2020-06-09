import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index";
import signIn from "../views/user/signIn";
import signUp from "../views/user/signUp";
import essayDetail from "../views/essay/essayDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path:"/signIn",
    name:"signIn",
    component:signIn
  },
  {
    path:"/signUp",
    name:"signUp",
    component:signUp
  },
  {
    path: "/essayDetail",
    name: "essayDetail",
    component: essayDetail
  }
];


const router = new VueRouter({
  routes,
});

router.afterEach(() => {
  window.scrollTo(0,0);
})

export default router;
