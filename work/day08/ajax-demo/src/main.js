// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/*
  import "./common/css/index.css"
  import 一个样式 (不推荐的  他会使我们的打包文件变的很大)
    我们导入的样式 最终会打包在app.js
  link标签引入样式 (公共样式 建议放在index.html中引入)
    html 引入一个静态资源 跟webpack没有半毛钱关系
  style.scope
    这个样式也是webpack管理 而且只作用域当前模块
*/

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
