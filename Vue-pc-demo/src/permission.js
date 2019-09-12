// util:token 的获取
// import { getToken }  from '@/utils/auth';
// 控制一些路由
import router from './router';
// 某些用户的方法写到了vuex里面 why??
// import store from './store';


import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式

// 设置一个不用登录就可以访问的名单列表
const whiteList =[];


router.beforeEach((to,from,next) =>{
    NProgress.start()
    // to.path  当前的路由
    // next(path) 跳转到path这个路由
    if(to.path == "/"){
        next({
            path: "/main/start"
        })
    } else{
        next();
    }
    // NProgress.done()
    

})
router.afterEach(()=>{
    NProgress.done()
})

