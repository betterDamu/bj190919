import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import User from "@/pages/User.vue";


export default [
  {path:"/About",component:About},
  {path:"/Home",component:Home},

  // 兄弟路由的命名要有规范;不能命名的像一个子路由
  {path:"/User",component:User},
  { path: '/', redirect: '/About' }
]
