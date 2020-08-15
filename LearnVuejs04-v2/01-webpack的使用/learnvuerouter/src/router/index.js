import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
const Profile = () => import('../components/Profile')
const News = () => import('../components/News')
const Message = () => import('../components/Message')

//1.通过Vue.use安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes=[
  {
    // 路由的默认路径
    path:'',
    // redirect重定向
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      // 默认显示
      // {
      //   path:'',
      //   redirect: 'news'
      // },
      {
        path:'news',
        component: News
      },
      {
        path:'message',
        component: Message
      }
    ],
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  },

]

const router =new VueRouter({
  routes,
  // history模式
  mode:'history'
})

// 全局守卫
// 前置守卫（路由跳转前调用）
router.beforeEach((to,form,next)=>{
  document.title=to.matched[0].meta.title;
  next()
})

// 后置钩子（路由跳转后调用）
router.afterEach((to,from)=>{

})

//3.将router对象传入实例中，导出
export default router