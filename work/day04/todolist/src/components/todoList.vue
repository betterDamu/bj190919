<template>
  <ul class="todo-main">
    <todo-item v-for="item in listArr" :item="item"></todo-item>
  </ul>
</template>

<script>
    import todoItem from "./todoItem"
    export default {
        name: "todoList",
        props:{
          listArr:Array
        },
        components:{
          "todo-item":todoItem
        }
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
