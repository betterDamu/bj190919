<template>
  <div>
    测试axios的put方法
  </div>
</template>

<script>
    //https://api.github.com  github的请求的基地址

    //在js中函数是一等公民   它也是个对象
    // 1. axios(config)
    // 2. axios(url,config)
    // 3. axios.put(url,data,config)


    import axios from "axios";
    export default {
        name: "getAxios",
        async mounted(){
            const body = await axios({
              baseURL: 'https://api.github.com',
              url:"/repos/betterDamu/bj190919/issues/13/lock",
              method:"PUT",
              data: {
                "locked": true,
                "active_lock_reason": "too heated"
              },
              // headers: {'Authorization': 'token ec9df5018b79b6d3dc7b959b6d303e5fd3063f63'},
            })
            console.log(body)
        }
    }

    // 1b03fe29a167eefe7dc7d19531c7e1b2d6689658
</script>


<style scoped>

</style>
