<template>
    <div>
      第{{$route.params.id}}号user;
      用户名为:{{$route.query.name}}
    </div>
</template>

<script>
    export default {
        name: "User",
        mounted(){
          console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
