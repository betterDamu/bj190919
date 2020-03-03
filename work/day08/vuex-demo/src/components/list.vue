<template>
  <div class="row">
    <v-item></v-item>
  </div>
</template>

<script>
    import item from "@/components/item.vue"
    export default {
        name: "list",
        components:{
          "v-item":item
        }
    }
</script>

<style scoped>

</style>
