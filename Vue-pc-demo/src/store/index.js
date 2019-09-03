// 组装模块并导出 store的地方
import Vue from 'vue'
import Vuex from 'vuex'

// 导入其他分割的module
import demo from './modules/demos'

// 导入getters 所有数据的getter
import getters from './getters'



// 使用
Vue.use(Vuex);
// 定义并导出 store
const  store = new Vuex({
    modules:{
        demo

    },
    getters,
})

export default store