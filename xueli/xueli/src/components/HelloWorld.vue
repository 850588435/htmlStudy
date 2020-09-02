<template>
  <div>
    {{msg}}
    <button @click="$router.push({path:'Frame'})">Frame</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    mes:{
      type:String,
      value:'Hello 你好！',
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
