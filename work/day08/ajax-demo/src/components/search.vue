<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim="searchName"/>
      <button @click="searchFn">Search</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "search",
        data(){
          return {
            searchName:""
          }
        },
        methods:{
          searchFn(){
            this.$bus.$emit("search",this.searchName)
          }
        }
    }
</script>

<style scoped>

</style>
