<template>
  <div class="row">
    <p v-if="showTip" style="font-size: 30px">请输入您要查询的用户</p>
    <p v-else-if="showLoading" style="font-size: 30px">loading...</p>
    <p v-else-if="showNoBody" style="font-size: 30px">查无此人</p>
    <div v-else>
      <v-item v-for="(item,index) in list" :key="index" :item="item" ></v-item>
    </div>
  </div>
</template>

<script>
    import item from "@/components/item.vue";
    import {mapState} from "vuex";
    export default {
        name: "list",
        components:{
          "v-item":item
        },
        computed:{
          ...mapState(["showTip","showLoading","showNoBody","list"])
        }
    }
</script>

<style scoped>

</style>
