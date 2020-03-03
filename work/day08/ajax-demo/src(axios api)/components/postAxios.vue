<template>
  <div>
    测试axios的post方法
  </div>
</template>

<script>
    //https://api.github.com  github的请求的基地址

    //在js中函数是一等公民   它也是个对象
    // 1. axios(config)
    // 2. axios(url,config)
    // 3. axios.post(url,data,config)


    import axios from "axios";
    export default {
        name: "getAxios",
        async mounted(){
            const body = await axios({
              baseURL: 'https://api.github.com',
              url:"/repos/betterDamu/bj190919/issues",
              method:"POST",
              data: {
                title: '找bug',
                body:"出现了一个很难搞懂的bug"
              },
              //headers: {'Authorization': 'token 1b03fe29a167eefe7dc7d19531c7e1b2d6689658'},
            })
            console.log(body)
        }
    }

    // 1b03fe29a167eefe7dc7d19531c7e1b2d6689658
</script>


<style scoped>

</style>
