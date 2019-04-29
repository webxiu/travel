// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/store.js'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/iconfont.css'
import fastClick from 'fastClick'
import LyTab from 'ly-tab'

Vue.use(LyTab)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    //获取真实定位地址
    let map = new BMap.Map("allmap")
    let myCity = new BMap.LocalCity()
    myCity.get((result)=>{
      console.log('当前定位地址:',result.name);
      if (result) {
        //存入vuex状态管理中
        this.$store.state.city = result.name
      }else{
        this.$store.state.city = '北京'
      }
    });
  }
})
