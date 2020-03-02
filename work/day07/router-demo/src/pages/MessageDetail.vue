<template>
    <div>
       <span v-show="detail.id">id:{{detail.id}}</span> <br>
       <span v-show="detail.title">title:{{detail.title}}</span> <br>
       <span v-show="detail.context">context:{{detail.context}}</span> <br>
    </div>
</template>

<script>
    const list = [
      {id:1,title:"message1",context:"message1新闻的详细信息"},
      {id:2,title:"message2",context:"message2新闻的详细信息"},
      {id:3,title:"message3",context:"message3新闻的详细信息"},
      {id:4,title:"message4",context:"message4新闻的详细信息"}
    ]
    export default {
        name: "MessageDetail",
        props:{
          id:String
        },
        data(){
          return {
            detail:{}
          }
        },
        methods:{
          showDetail(){
            setTimeout(()=>{
              this.detail = list.find((item)=>{
                // + string --> number
                return +this.id === item.id;
              })
            },2000)
          }
        },
        mounted(){
          /*
            /Home/Message/2 -- MessageDetail.vue
            /Home/Message/3 -- MessageDetail.vue
              动态路由匹配的时候;路由组件会选择复用;生命周期钩子只会被调用一次
              其他情况下;组件是不会被复用的.
          */
          this.showDetail()
        },
        watch:{
          $route(){
            this.showDetail()
          }
        }
    }
</script>

<style scoped>

</style>
