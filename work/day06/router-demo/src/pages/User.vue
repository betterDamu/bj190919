<!--如果使用默认的传参 和 接受参数的方式;-->
<!--会导致 我们当前这个User组件 与 Vue_router高度耦合-->
<!--User组件离不开vue-router了-->


 <!--我们需要将组件和vue-router解耦(解开耦合)-->
<template>
    <div>
      第{{id}}号user;
      用户名为:{{name}}
    </div>
</template>

<script>
    export default {
        name: "User",
        props:["id","name"],
        mounted(){
          //当多个动态路由匹配到同一个组件时;该组件的生命周期钩子只会被调用一次!!!
          console.log("----")
        }
    }
</script>

<style scoped>

</style>
