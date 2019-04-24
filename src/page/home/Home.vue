<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
export default {
  name: 'home',
  components:{
    homeHeader,
    homeSwiper
  }
}
</script>

<style scoped>

</style>
