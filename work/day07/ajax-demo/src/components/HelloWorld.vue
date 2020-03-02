<template>
  <div class="hello">
    当前github用户是:{{user.login}}
  </div>
</template>

<script>
  const axios = require('axios');
  export default {
    name: 'HelloWorld',
    data () {
      return {
        user:{}
      }
    },
    async mounted(){
      //https://developer.github.com/   github的后台restful接口文档
      //https://api.github.com  github的请求的基地址
      //const body = await this.$http.get("https://api.github.com/search/users?q=betterDamu");

      /*const body = await axios.get("https://api.github.com/search/users",{
        params:{
          q:"damu"
        }
      })
      this.user = body.data.items[0];*/


      //并发请求  使用Promise.all可以同时发两个请求  而且返回的数据是两个请求成功之后的数据组成的数组
      const damuPromise = axios.get("https://api.github.com/search/users?q=betterDamu");
      const xfzPromise = axios.get("https://api.github.com/search/users?q=damu");
      //const body = await Promise.all([damuPromise,xfzPromise]);
      // console.log(body)

      axios.all([damuPromise,xfzPromise]).then(axios.spread(function (a, b) {
        // 两个请求现在都执行完成
        console.log("a",a);
        console.log("b",b);
      }))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
