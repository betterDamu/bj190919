<template>

  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :listArr="listArr"></todo-list>
        <todo-footer :listArr="listArr" @checkAll="checkAll" @clear="clear"></todo-footer>
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
          {id:1,content:"三级头",checked:false},
          {id:2,content:"三级甲",checked:false}
        ]
      }
    },
    methods:{
      addTodo(item){
        this.listArr.unshift(item)
      },
      clear(){
        //将checked为true的数据全部过滤掉了
        this.listArr = this.listArr.filter((item)=>{
          return !item.checked
        })
      },
      checkAll(flag){
        this.listArr.forEach((item)=>{
          item.checked = flag;
        })
      }
    },
    components:{
      "todo-header":todoHeader,
      "todo-list":todoList,
      "todo-footer":todoFooter
    },
    mounted(){
      this.bus.$on("delTodo",(id)=>{
          this.listArr = this.listArr.filter((item)=>{
              return item.id !== id
          })
      })

      this.bus.$on("change",(id,checked)=>{
        /*id: 代表todoitem中操作的是哪一个li
        checked: 当前li的状态*/
        this.listArr.forEach((item)=>{
        if(item.id === id){
          item.checked = checked;
        }
      })
    })
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
