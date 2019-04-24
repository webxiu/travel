<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-catalog></home-catalog>
    <home-hot></home-hot>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
export default {
  name: 'home',
  components:{
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot
  }
}
</script>

<style scoped>

</style>
