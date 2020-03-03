<template>
  <div>
    <p style="font-size: 35px" v-if="showTip">请输入要查询的用户</p>
    <p style="font-size: 35px" v-else-if="showLoading">Loading...</p>
    <div class="row" v-else>
      <div class="card" v-for="item in list">
        <a :href="item.rep" target="_blank">
          <img :src="item.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.userName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "list",
        data(){
          return {
            list:[],
            showTip:true,
            showLoading:true
          }
        },
        mounted(){
          this.$bus.$on("search",async (searchName)=>{
              //loading图标 每一次请求数据都得显式
              this.showLoading=true;
              //将提示语清除清除掉 显示loading
              this.showTip = false;
              const body = await axios({
                baseURL:"https://api.github.com",
                url:"/search/users",
                method:"get",
                params:{
                  q:searchName
                }
              })

              /*在真实开发的时候:
                我们的后台接口很有可能还没有完成;需要前端组件去设计假数据;
                {
                  userName:"damu",
                  avatar:"xxx",
                  rep:"yyy"
                }

                在后台开发完成之后 发现接口没有对好
                {
                  login:"damu",
                  avatar_url:"xxx",
                  html_url:"yyy",
                  a:"a",
                  b:"a",
                  c:"a"
                }


                arr.map((item)=>{
                    return {
                      userName:item.login,
                      avatar:item.avatar_url,
                      rep:item.html_url
                    }
                })

              */


              this.list = body.data.items.map(item =>({
                rep:item.html_url,
                avatar:item.avatar_url,
                userName:item.login
              }));

              /*this.list = body.data.items.map((item)=>{
                return {
                  rep:item.html_url,
                  avatar:item.avatar_url,
                  userName:item.login
                }
              });*/
              //将loading清除掉 显示返回回来的数据
              this.showLoading = false;
          })
        }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
