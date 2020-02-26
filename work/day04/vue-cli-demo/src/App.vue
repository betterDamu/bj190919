<!--
  从一个.vue文件 编译成一个vue原生支持的模板 靠vue-loader来做的
  var a = {
    name:"App",
    template:"<div id="app">
              {{msg}}
            </div>",
    data(){
      return {
        msg:"hello vuc-cli"
      }
    }
  }
-->


<template>
  <div id="app">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
      return {
        msg:"hello vuc-cli"
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
