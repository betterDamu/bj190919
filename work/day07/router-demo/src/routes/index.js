import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import User from "@/pages/User.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import UserDetail from "@/pages/UserDetail.vue";
import MessageDetail from "@/pages/MessageDetail.vue";


export default [
  {path:"/About",component:About},
  {
    path:"/Home",
    component:Home,
    children:[
      {path:"News",component:News},
      {
        path:"Message",
        component:Message,
        children:[
          {
            path:":id",
            component:MessageDetail,
            props:true
          }
        ]
      }
    ]
  },
  {
    path:"/User",
    component:User,
    children:[
      {
        path:":id",
        component:UserDetail,
        props: (route)=>{
          return {
            id:route.params.id,
            name:route.query.name
          }
        }// 代表当前占位符id 会以props的方式进行数据传递
      }
    ]
  },
  {path: '/', redirect: '/About' }
]
