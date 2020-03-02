import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes";
Vue.use(VueRouter);

/*
  在没有子路由 且命名规范的情况下:
    linkActiveClass linkExactActiveClass 用谁都可以

  在有子路由的情况下使用
    linkActiveClass
*/
export default new VueRouter({
  routes,
  mode:"hash",
  linkActiveClass:"active"
  // linkExactActiveClass:"active"
})




