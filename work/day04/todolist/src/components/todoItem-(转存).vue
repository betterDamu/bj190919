<template>
  <li>
    <label>
      <!--
        v-model脏数据: v-model本身就是数据双向绑定;当你点击当前这个input时;
        你要考虑到;你已经触发了数据双向绑定了;因为数据双向绑定;导致我们在todoitem
        这个组件中 直接修改了app的数据; 虽然说功能可以实现;可是这种实现方式违反了我们
        数据传递的规则;会使我们的项目在后期很难维护;所以我们不应该在todoitem(孙组件)
        中直接修改app(爷组件)的数据
      -->

     <!-- 处理方案:
        1. 将app中传过来的数据在todoitem中进行一次转存
            以后在todoitem中 我们只修改转存的那一份数据
            这种处理方式 我们不会直接修改到app中的数据

        app中的那个checked数据 要不要被修改?
          如果说 checked这个数据 只有todoitem使用 那我们不用关心操作todoitem时;app的数据要不要被修改

          当checked这个数据 不光todoitem使用 以后footer组件也要使用时;
          在操作todoitem时 app中的checked要不要被修改? : 要修改
            因为最终footer中的数据 是来至于app的

            下一步: 操作todoitem时 我们要修改app的数据!!!
                  总线机制 实现爷孙组件传值
     -->

      <input type="checkbox" v-model="checked"
             @change="change(item.id)"/>
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
    export default {
        name: "todoItem",
        props:{
          item:Object
        },
        data(){
          return {
            checked:this.item.checked
          }
        },
        methods:{
          //当前这个函数被调用时 我们要去修改app中的checked数据
          change(id){
            this.bus.$emit("change",id,this.checked)
          }
        }

    }
</script>

<!--scoped 可以保證组件内部的样式只作用域组件内的元素-->
<style scoped>
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
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
