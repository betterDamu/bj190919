<template>
    <div>
      test axios 拦截器
    </div>
</template>

<script>
    import axios from "axios";
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在请求发送之前被调用 返回的config是真正发送请求时的config
      config.headers.Authorization = 'token e5a364e044840a75b0924e1304bf78890b41bbcb'
      return config;
    });


    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      //请求成功之后 数据返回之前被调用 返回的对象才是请求真正返回给客户端的数据
      //统一处理返回数据的结构
      console.log(response,"response")
      return response.data;
    }, function (error) {
      //请求失败之后 数据返回之前被调用 返回是错误对象
      //对请求失败的情况 做一些统一处理
      alert("请求失败了")
      return Promise.reject(error);
    });


    export default {
        name: "axiosInstance",
        async mounted(){
            const body = await axios({
              url:"/repos/betterDamu/bj190919/issues2",
              method:"get",
              baseURL: 'https://api.github.com'
            })
            console.log(body);


            /*const body = await axios({
              baseURL: 'https://api.github.com',
              url:"/repos/betterDamu/bj190919/issues",
              method:"POST",
              data: {
                title: '找bug啦啦啦',
                body:"出现了一个很难搞懂的bug啦啦啦"
              },
            })*/

        }
    }
</script>

<style scoped>

</style>
