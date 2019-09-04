import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_'+ process.env.NODE_ENV)

// 多层路由时，需要一个layout支撑你的父级路由：父级路由中需要一个 router-view
import layout from '@/views/layout/index'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/main',
    name: 'main',
    component: layout,
    children:[
      {
        path: 'start',
        name: 'HelloWorld',
        component:_import('start')
      },
      {
        path: 'test',
        name: 'test',
        component:_import('test')
      }
    ]
  },
  
  {
    path: '/404',
    name: '404',
    component: _import('404'),
    hidden: true
  }
]

export default new Router({
  // 路由页面切换的时候，存在页面 滑动问题，这个方法 将页面的定位恢复
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
