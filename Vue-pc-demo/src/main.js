import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的全局样式
// import "normalize.css"; // normalize.css 样式格式化
import "@/assets/styles/index.scss"; // 全局自定义的css样式
import '@/assets/styles/css/self.css'

Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
