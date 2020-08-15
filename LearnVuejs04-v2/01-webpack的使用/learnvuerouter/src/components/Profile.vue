<template>
  <div>
    <h2>我是Profile组件</h2>
    <ul v-for="(item,i) in $route.query">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>