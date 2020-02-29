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
  {
    path:"/User",
    component:User,
    props: (route)=>{
      return {
        id:route.params.id,
        name:route.query.name
      }
    },// 代表当前占位符id 会以props的方式进行数据传递
    children:[
      {
        path:":id",
        component:User,
      }
    ]
  },
  { path: '/', redirect: '/About' }
]
