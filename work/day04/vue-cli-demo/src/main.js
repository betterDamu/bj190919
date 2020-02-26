import Vue from 'vue'
//在webpack中 如果遇到一个它不认识的文件 是不是需要用laoder来解析
//webpack 天生只认识.js文件 .json文件
import App from './App'

Vue.config.productionTip = false //消除提醒

/* eslint-disable no-new */
new Vue({
  el: '#app',


  //我们一开始选择的是运行时版本  所以在这边我们使用的是render函数
  render: h => h(App)
  /*
    经过render函数的处理之后 我没拿到的是
    template: "<div id="app">hello vuc-cli</div>"
  */

  // render(createVNode){
  //   return createVNode("strong",this.msg)
  // }
})
