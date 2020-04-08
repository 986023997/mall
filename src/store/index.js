import Vue from 'vue'
import Vuex from 'vuex'

Vue.user(Vuex)
const store=new Vuex.Store({
    state:{
        componentName:'朱林'
    },
})
export default store