import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import User from "@/pages/User.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";


export default [
  {path:"/About",component:About},
  {
    path:"/Home",
    component:Home,
    children:[
      {path:"News",component:News},
      {path:"Message",component:Message}
    ]
  },

  // 兄弟路由的命名要有规范;不能命名的像一个子路由
  {path:"/User",component:User},
  { path: '/', redirect: '/About' }
]
