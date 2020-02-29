import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes";
Vue.use(VueRouter);


// 路由器: new VueRouter({})
/*
  路由器的配置
    routes : 注册路由的
    mode : 路由的类型(hash history)
      hash :
        基本上所有浏览器都支持;可是它有一个致命的问题;hash的变化后台是感觉不到的
        在做微信支付的时候;是不支持hash模式 (后台压根感觉不到)
      history:
        兼容性没有hash高;当时后台能感知到(即使使用history;后面还是有些坑的;与后台联调)
*/
export default new VueRouter({
  routes,
  mode:"hash",
  /*
  * 模糊匹配
  *
  *   当你访问 /damu/zdy 这个路由时;
  *   /damu 所对应的a标签上也会出现linkActiveClass
  *   /damu/zdy 所对应的a标签上会出现linkActiveClass
  *
  * */
  linkActiveClass:"active",
  /*
    * 精确匹配
    *
    *   当你访问 /damu/zdy 这个路由时;
    *   /damu 所对应的a标签上不会出现linkExactActiveClass
    *   /damu/zdy 所对应的a标签上会出现linkExactActiveClass
    *
    * */
  // linkExactActiveClass:"active"
})



/*在没有子路由 且命名规范的情况下:
  linkActiveClass linkExactActiveClass 用谁都可以*/
