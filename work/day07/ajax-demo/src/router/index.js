import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import getAxios from '@/components/getAxios'
import postAxios from '@/components/postAxios'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/getAxios', name: 'getAxios', component: getAxios},
    {path: '/postAxios', name: 'postAxios', component: postAxios}
  ]
})
