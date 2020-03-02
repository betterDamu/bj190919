<template>
  <div class="hello">
    当前github用户是:{{user.login}}
  </div>
</template>

<script>
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
    const body = await this.$http.get("https://api.github.com/search/users?q=betterDamu");
    this.user = body.data.items[0];
    console.log(body.data.items[0]);
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
