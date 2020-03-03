<template>
  <div class="card">
    <a href="https://github.com/reactjs" target="_blank">
      <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
    </a>
    <p class="card-text">reactjs</p>
  </div>
</template>

<script>
    export default {
        name: "item"
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
