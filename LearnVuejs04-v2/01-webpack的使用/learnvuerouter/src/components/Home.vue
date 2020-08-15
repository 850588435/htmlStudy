<template>
  <div>
    <h2>这里是Home</h2>
    <p>这里是Home内容内容内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>