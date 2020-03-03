<template>
  <div id="app">
      <span style="font-size: 30px" @click="handleC">
        {{count}}
      </span>
  </div>
</template>

<script>
export default {
  name: 'App',
      /*
        1. 仓库中的数据不能在组件直接使用;因为直接使用有可能会出现v-mode脏数据的情况
            所以一定要转存
        2. 因为转存了;所以转存的数据只会在初始化的时候同步一次仓库的数据;以后仓库的数据发生
            转存的数据是不会变得 使用界面得不到更新
        3. 将转存的数据设计为计算属性 以后仓库的数据发生改变 转存的数据也会改变
            界面就可以得到更新

        在读取仓库中数据时.组件上应该有一个计算属性与仓库中的数据进行一一对应
        在修改仓库中数据时.应该在组件上通过提交应该mutation来修改
      */
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    handleC(){
      //直接修改仓库的数据  不规范的写法
      //this.$store.state.count++
      //应该使用vuex仓库中的工具来修改仓库的数据
      this.$store.commit("inc")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
