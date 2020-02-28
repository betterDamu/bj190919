import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App'


Vue.config.productionTip = false


//1. 将VueRouter注册为Vue的插件
Vue.use(VueRouter);
//2. 创建组件并引入
import a from "@/components/a.vue"
import b from "@/components/b.vue"
//3. 定义路由
const routes = [
  {path:"/a",component:a},
  {path:"/b",component:b}
]
//4. 定义路由器
const router = new VueRouter({
  routes
})
// 5. 将路由器交给vue管理
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
