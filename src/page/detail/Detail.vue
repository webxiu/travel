<template>
  <div class="detail">
   <detail-header></detail-header>
   <detail-swiper></detail-swiper>
   <router-view></router-view>
  </div>
</template>

<script>
import detailHeader from './components/detailHeader'
import detailSwiper from './components/detailSwiper'
export default {
    name:'Detail',
    components:{
      detailHeader,
      detailSwiper,
    }

}
</script>
<style lang="stylus" scoped>

</style>