<template>
  <div  msg="atguigu"><h2 data-v-957c9522="">home组件</h2>
    <div data-v-957c9522="">
      <ul data-v-957c9522="" class="nav nav-tabs">
        <li data-v-957c9522="">
          <router-link to="/Home/News">News</router-link>
        </li>
        <li data-v-957c9522="">
          <router-link to="/Home/Message">Message</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Home",
        //普通的路由被访问时 其对应的组件是不会被复用的 每次该组件的生命周期钩子都会被执行
        mounted(){
          console.log("home")
        }
    }
</script>

<style scoped>

</style>
