import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//父组件的数据 一般都要通过 父组件的方法来进行修改
//vuex仓库中的数据 一般都要通过 仓库中的工具进行修改


//当前配置对象中所有属性都会转绑给store仓库
const store = new Vuex.Store({
  strict: true,
  //数据
  state: {
    count: 0,
    firstName:"T",
    lastName:"Mac"
  },
  //相当于仓库内部的计算属性
  getters:{
    //api vuex帮你传的
    flag(state){
      return (state.count%2 === 0)?"偶":"奇"
    },
    fullName(state){
      return state.firstName + "-" + state.lastName
    }
  },
  //操作数据的工具
  mutations:{
    //同步的修改仓库的数据
    //不能在mutation内部异步的修改数据 如果在mutation内部异步的修改数据
    //会使我们vuex的调试工具变的不可用
    inc(state,{test,test2}){
      state.count++;
      console.log(test,test2)
    }
  },
  actions:{
    //action中一般写异步逻辑;在action中我们会提交mutation来同步的去修改数据state
    asyncInc({commit},{test,test2}){
      //定时器是异步的 ;访问服务器获取数据 异步的!!!
      setTimeout(()=>{
        commit("inc",{test,test2})
      },2000)
    }
  }

})

export default store;
