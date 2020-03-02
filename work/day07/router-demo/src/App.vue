<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--<a href="/about" class="list-group-item">About</a>-->
          <!--<a href="/home" class="list-group-item">Home</a>-->
          <!--<router-link to="/About" class="list-group-item">About</router-link>-->
          <!--<router-link to="/Home"class="list-group-item">Home</router-link>-->
          <!--<router-link to="/User"class="list-group-item">User</router-link>-->
          <div @click="toAbout" class="list-group-item" :class="{active:aboutActive}">About</div>
          <div @click="toHome" class="list-group-item" :class="{active:homeActive}">Home</div>
          <div @click="toUser" class="list-group-item" :class="{active:userActive}">User</div>
        </div>
      </div>
      <div class="col-xs-6">
        <div data-v-957c9522="" class="col-xs-6">
          <div data-v-957c9522="" class="panel">
            <div data-v-957c9522="" class="panel-body">
                <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      aboutActive:false,
      homeActive:false,
      userActive:false
    }
  },
  mounted(){
    console.log(this.$route)
    if(this.$route.path==="/About"){
      this.aboutActive = true
    }
    if(this.$route.path.includes("/Home")){
      this.homeActive = true
    }
    if(this.$route.path==="/User"){
      this.userActive = true
    }
  },
  methods:{
    toAbout(){
      this.aboutActive = true;
      this.homeActive = false;
      this.userActive = false;
      this.$router.push("/About")
    },
    toHome(){
      this.aboutActive = false;
      this.homeActive = true;
      this.userActive = false;
      this.$router.push("/Home")
    },
    toUser(){
      this.aboutActive = false;
      this.homeActive = false;
      this.userActive = true;
      this.$router.push("/User")
    }
  }
}
</script>

<style scoped>

</style>
