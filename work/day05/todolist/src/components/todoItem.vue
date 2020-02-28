<template>
  <li :class="{line:checked}">
    <label>
      <slot name="inputSlot" :index="index">
        <input type="checkbox" v-model="checked"/>
      </slot>
      <slot name="spanSlot" :content="item.content">
        <span>{{item.content}}</span>
      </slot>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script>
    export default {
        name: "todoItem",
        props:{
          item:Object,
          index:Number
        },
        data(){
          return {
            // this.item.checked产生改变时; line对象对应的地址值是没有变的
            // line:{
            //   line:this.item.checked
            // }
          }
        },
        computed:{
          checked:{
            get(){
              return this.item.checked
            },
            set(val){
              this.bus.$emit("change",this.item.id,val)
            }
          }
        },
        methods:{
          delTodo(){
            //把id传给app 进行删除
            this.bus.$emit("delTodo",this.item.id)
          }
        }
    }
</script>

<!--scoped 可以保證组件内部的样式只作用域组件内的元素-->
<style scoped>

  .line{
    position: relative;
  }
  .line:after{
    display: block;
    content: "";
    height: 1px;
    width: 90%;
    background: red;
    position: absolute;
    top:50%;
  }


  li:hover{
    background: pink;
  }
  li:hover button{
    display: block;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
    display: none;
    position: relative;
    z-index: 99;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>



<!--
        v-model脏数据: v-model本身就是数据双向绑定;当你点击当前这个input时;
        你要考虑到;你已经触发了数据双向绑定了;因为数据双向绑定;导致我们在todoitem
        这个组件中 直接修改了app的数据; 虽然说功能可以实现;可是这种实现方式违反了我们
        数据传递的规则;会使我们的项目在后期很难维护;所以我们不应该在todoitem(孙组件)
        中直接修改app(爷组件)的数据
      -->

<!-- 处理方案:
    1. 转存 + change事件
    2. 直接使用计算属性
         取值: 计算器属性的get方法
         设置值的时候: 计算属性的set方法
-->


<!--什么时候应该通知父组件进行数据修改 什么时候不用通知

   什么时候不用通知(这种情况比较少)
     当父组件分发给子组件数据时;每一个子组件拿到数据之后都是独立操作得;
       互相之间没有什么逻辑关联的;那子组件可以把父组件的直接转存下来随意操作

   什么时候应该通知父组件进行数据修改:
           当父组件分发给子组件数据时;每一个子组件拿到数据之后 操作数据时相互之间
           是有逻辑关联的;那我们在转存的前提下;每一次修改 我们得主动的通知父组件;
           让父组件来完成修改
-->
