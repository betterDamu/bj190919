import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import getAxios from '@/components/getAxios'
import postAxios from '@/components/postAxios'
import patchAxios from '@/components/patchAxios'
import putAxios from '@/components/putAxios'
import delAxios from '@/components/delAxios'
import axiosInstance from '@/components/axiosInstance.vue'
import axiosInter from '@/components/axiosInter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/getAxios', name: 'getAxios', component: getAxios},
    {path: '/postAxios', name: 'postAxios', component: postAxios},
    {path: '/patchAxios', name: 'patchAxios', component: patchAxios},
    {path: '/putAxios', name: 'putAxios', component: putAxios},
    {path: '/delAxios', name: 'delAxios', component: delAxios},
    {path: '/axiosInstance', name: 'axiosInstance', component: axiosInstance},
    {path: '/axiosInter', name: 'axiosInter', component: axiosInter}
  ]
})
