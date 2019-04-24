<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-catalog></home-catalog>
    <home-hot></home-hot>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
import homeWeekend from './components/homeWeekend'
export default {
  name: 'home',
  components:{
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot,
    homeWeekend
  }
}
</script>

<style scoped>

</style>
