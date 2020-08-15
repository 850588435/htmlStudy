import Vue from 'vue'
import App from './App'

// 如果文件夹下有index文件则可省略填写index.js，系统会自动寻找index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

