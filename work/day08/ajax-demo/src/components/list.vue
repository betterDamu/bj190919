<template>
  <div class="row">
    <div class="card" v-for="item in list">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "list",
        data(){
          return {
            list:[]
          }
        },
        mounted(){
          this.$bus.$on("search",async (searchName)=>{
              const body = await axios({
                baseURL:"https://api.github.com",
                url:"/search/users",
                method:"get",
                params:{
                  q:searchName
                }
              })
              this.list = body.data.items
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
