import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//父组件的数据 一般都要通过 父组件的方法来进行修改
//vuex仓库中的数据 一般都要通过 仓库中的工具进行修改


//当前配置对象中所有属性都会转绑给store仓库
const store = new Vuex.Store({
  //数据
  state: {
    count: 100
  }
  //操作数据的工具
})

export default store;
