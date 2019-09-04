import Vue from 'vue'
import App from './App'
import router from './router'
// store
// import store from './store'
// 权限== 页面重定向 和token的校验(放在和main.js  同级) 
import '@/permission'
// 按钮权限表
// import PBTN from '@/utils/permissions.cfg' 


// 公用js--utils中 

// i18n---国际化
// 公用封装http
// 公用正则


// 全局filter
import * as filters from '@/filters'
// 全局指令


import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的全局样式
// import "normalize.css"; // normalize.css 样式格式化
import "@/styles/index.scss"; // 全局自定义的css样式
import '@/styles/self.scss'

Vue.use(Element);
// Vue.use(PBTN);

// 注册全局的filter 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// render是2.0 中新的挂载方法
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
