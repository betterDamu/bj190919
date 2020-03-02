<template>
    <div>
      <br>
      <ul>
        <li v-for="item in list">
          <!--<span>{{item.title}}</span>-->
          <!--<router-link :to="`/Home/Message/${item.id}`">{{item.title}}</router-link>-->
          <span>{{item.title}}</span>
          <button @click="pushFn(item.id)">push</button>
          <button @click="replaceFn(item.id)">replace</button>
        </li>
      </ul>
      <button @click="backFn">back</button>
      <br>
      <router-view></router-view>
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
        name: "Message",
        data(){
          return {
            list:[]
          }
        },
        mounted(){
          //模拟一下ajax的行为
          setTimeout(()=>{
            this.list = list;
          },2000)
        },
        methods:{
          pushFn(id){
            this.$router.push(`/Home/Message/${id}`)
          },
          replaceFn(id){
            this.$router.replace(`/Home/Message/${id}`)
          },
          backFn(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>

</style>
