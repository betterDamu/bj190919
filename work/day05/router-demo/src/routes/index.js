import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";

export default [
  {path:"/About",component:About},
  {path:"/Home",component:Home},
  { path: '/', redirect: '/About' }
]
