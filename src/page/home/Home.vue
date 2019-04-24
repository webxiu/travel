<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-catalog></home-catalog>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
export default {
  name: 'home',
  components:{
    homeHeader,
    homeSwiper,
    homeCatalog
  }
}
</script>

<style scoped>

</style>
