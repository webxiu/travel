import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city:'北京',
        index:0
    },
    actions:{
        //1.监听change
        change(ctx,city){
            //2.派发city数据
            ctx.commit('change',city)
        }
    },
    mutations:{
        //3.修改数据
        change(state,city){
            state.city = city
        }
    }
})