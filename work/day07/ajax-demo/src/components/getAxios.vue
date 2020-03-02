<template>
  <div>
    测试axios的get方法
  </div>
</template>

<script>
    //https://api.github.com  github的请求的基地址

    //在js中函数是一等公民   它也是个对象
    // 1. axios(config)
    // 2. axios(url,config)
    // 3. axios.get(url,config)


    import axios from "axios";
    export default {
        name: "getAxios",
        async mounted(){
          const body = await axios({
            url:"/repos/betterDamu/bj190919/issues",
            method:"get",
            baseURL: 'https://api.github.com'
          })

          /*const body = await axios("https://api.github.com/repos/betterDamu/bj190919/issues",{
            method:"get"
          })*/

          // const body = await axios.get("https://api.github.com/repos/betterDamu/bj190919/issues")
          console.log(body.data[0],"+++++")
        }
    }
</script>


<style scoped>

</style>
