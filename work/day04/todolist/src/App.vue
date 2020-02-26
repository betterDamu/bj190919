<template>

  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :listArr="listArr"></todo-list>
        <todo-footer></todo-footer>
      </div>
    </div>
  </div>

</template>

<script>
  import todoHeader from "./components/todoHeader";
  import todoList from "./components/todoList";
  import todoFooter from "./components/todoFooter";
  export default {
    name: 'App',
    data(){
      return {
        listArr:[
          {id:0,content:"98k",checked:false},
          {id:1,content:"三级头",checked:true},
          {id:2,content:"三级甲",checked:false}
        ]
      }
    },
    methods:{
      addTodo(item){
        this.listArr.unshift(item)
      }
    },
    components:{
      "todo-header":todoHeader,
      "todo-list":todoList,
      "todo-footer":todoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
