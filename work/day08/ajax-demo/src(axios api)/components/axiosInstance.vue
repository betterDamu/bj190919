<template>
    <div>
      test axiosInstance
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "axiosInstance",
        async mounted(){
          //1. axios(config)
          //2. axios(url,config)
          //3. axios.get(url,config)

          /*
            通过axios实例来发送请求
              1. 以后真实项目开发中 我们会有很多模块 各个模块之间发送请求的细节可能会不一样
                  所以 一般在开发中  我们一个模块会使用一个axios实例

              config 可以在三个地方进行配置
                全局: axios.defaults            当前这个config的配置优先级最低

                创建实例: var ins = axios.create(config)  当前这个config的配置优先级第二高

                发送请求: axios.get(url,config)  当前这个config的配置优先级最高
                发送请求: ins.get(url,config)  当前这个config的配置优先级最高
          */
          axios.defaults.baseURL = 'https://api.example.com';
          const axiosIns = axios.create({
            //baseURL: 'https://api.github.com',  // A模块
            timeout:5000
          })
          const body = await axiosIns.get("/repos/betterDamu/bj190919/issues")
          console.log(body);

          /*const axiosIns2 = axios.create({
            baseURL: 'https://api.github2.com',  // B模块  伪代码
            timeout:3000
          })*/

          /*axiosIns({
            baseURL: 'https://api.github.com',
            url:"/repos/betterDamu/bj190919/issues",
            method:"get"
          })*/

          /*axiosIns("/repos/betterDamu/bj190919/issues",{
            baseURL: 'https://api.github.com',
            method:"get"
          })*/


        }
    }
</script>

<style scoped>

</style>
