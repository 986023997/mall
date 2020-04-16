import Vue from 'vue'
import Vuex from 'vuex'

// 状态管理
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        componentName:'朱林'
    },
})
export default store