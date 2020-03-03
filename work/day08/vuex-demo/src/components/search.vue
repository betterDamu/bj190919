<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search"
             v-model.lazy.trim="searchName"/>
      <button>Search</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "search",
        computed:{
          searchName:{
            get(){return this.$store.state.searchName},
            set(val){
              //理论上 我们应该在此处去提交一个mutation来同步的修改数据
              /*
                真实开发中 为了可以统一对vuex的操作
                我们习惯性 通过转发一个action来开始对vuex中的数据进行修改
                  不管是同步的修改 还是异步的修改
                    组件 --dispatch--> action --commit--> mutation --修改--> state
             */
              this.$store.dispatch("searchName",val)
            }
          }
        }
    }
</script>

<style scoped>

</style>
