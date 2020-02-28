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
        //只要listArr产生改变;我们就应该将listArr这个数据塞到local中;或者去local修改这个数据
        listArr:[]
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
      /*
        JSON序列化: 将一个对象 转成 字符串表达形式
          JSON.stringify(obj)
        JSON反序列化: 将一个对象形式的字符串 转成 对象
          JSON.parse(str)
      */
      //从localStorage中获取数据
      let listArr = localStorage.getItem("todolist");
      this.listArr = listArr ? JSON.parse(listArr): [],
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
    },
    watch:{
      // watch: 默认是一个钱监听  listArr数组本身产生变化 watch是可以监听的
      // 数组内部的一个对象产生了变化 那watch是监听不到的
      // listArr(val){
      //   //去同步local
      //   localStorage.setItem("todolist",JSON.stringify(val))
      // }
      listArr:{
        handler: function (val, oldVal) {
          localStorage.setItem("todolist",JSON.stringify(val))
        },
        deep: true
      }
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
