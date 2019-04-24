// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/iconfont.css'
import fastClick from 'fastClick'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
