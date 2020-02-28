<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
      v-model="msg" @keydown.enter="addTodo" />
  </div>
</template>

<script>
    //@ : src这个目录
    import util from "@/util";
    export default {
        name: "todoHeader",
        data(){
          return {
            msg:""
          }
        },
        methods:{
          addTodo(){
            //将这个数据交给app组件中的arrList
            //header 传递数据 给app组
            //子向父的数据传递
            let id = util.get("todoid",0);
            id++;
            util.set("todoid",id);
            var item = {
              id,
              content:this.msg,
              checked:false
            }
            this.$emit("addTodo",item);
            this.msg="";
          }
        }
    }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
