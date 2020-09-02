<template>
  <div id="app">

<!--    &lt;!&ndash; router-link默认在页面渲染为a标签  &ndash;&gt;-->
<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->

<!--    &lt;!&ndash;  router-link tag属性，设置渲染成什么组件&ndash;&gt;-->
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->

<!--    &lt;!&ndash;  router-link replace属性，页面不能返回上一页  &ndash;&gt;-->
<!--    <router-link to="/home" replace>首页</router-link>-->
<!--    <router-link to="/about" replace>关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">首页</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{name:'zd',age:18}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi',
    }
  },
  created(){
    this.$router.push('/home/news')
  },
  // 活跃的路由
  activated() {
    console.log('activated');
    this.$router.push(this.path)
  },
  // 不活跃的路由
  deactivated() {
    console.log('deactivated');
  },
  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave="+this.$route.path);
    this.path=this.$route.path
    next()
  },
  methods:{
    homeClick(){
      // 通过代码的方式修改路由 vue-router
      this.$router.push('/home');
      console.log('homeClick');
    },
    aboutClick(){
      this.$router.push('/about');
      console.log('aboutClick');
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'query1',
          age:14,
          addres:'xian'
        }
      })
    },

  }
}
</script>

<style>
  /*默认选中的class属性*/
  .router-link-active{
    color:red;
  }
</style>
