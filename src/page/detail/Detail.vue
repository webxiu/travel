<template>
  <div class="detail">
   <detail-header></detail-header>
   <detail-swiper></detail-swiper>
   <detail-map></detail-map>
   <router-view></router-view>
  </div>
</template>

<script>
import detailHeader from './components/detailHeader'
import detailSwiper from './components/detailSwiper'
import detailMap from './components/detailMap'
export default {
    name:'Detail',
    components:{
      detailHeader,
      detailSwiper,
      detailMap,
    }

}
</script>
<style lang="stylus" scoped>

</style>