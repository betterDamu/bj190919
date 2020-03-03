<template>
  <div id="app">
      <span>
        {{firstName}} - {{lastName}}
      </span>
      <br>
      <span>
        {{fullName}}
      </span>
      <br>
      <span style="font-size: 30px" @click="inc({test:'a',test2:'b'})">
        当前{{count}}是 <strong style="color:red;">{{flag}}</strong> 数
      </span>
      <br>
      <button @click="asyncInc({test:'a',test2:'b'})">async add</button>
  </div>
</template>

<script>
  // vuex中的state 我们在组件中使用时通常需要有对应的computed
  // vuex中的getters 我们在组件中使用时通常需要有对应的computed
  // vuex中的mutations 我们在组件中使用时通常需要有对应的methods
  // vuex中的actions 我们在组件中使用时通常需要有对应的methods
import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
export default {
  name: 'App',
  computed:{
    ...mapState(["count","firstName","lastName"]),
    ...mapGetters(["fullName","flag"])
  },
  methods:{
    ...mapActions(["asyncInc"]),
    ...mapMutations(["inc"])
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
