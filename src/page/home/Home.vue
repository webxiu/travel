<template>
  <div class="home">
    <home-header class="home-header" :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
  <home-catalog :iconList="iconList"></home-catalog>
  <home-hot
    :hotPriseList="hotPriseList"
    :hotTrendList="hotTrendList"
    :hotContentList="hotContentList"
  ></home-hot>
  <home-weekend :weekendList="weekendList"></home-weekend>
  <home-guess :guessList="guessList"></home-guess>
  </div>
</template>

<script>
import axios from 'axios'
import homeHeader from './components/homeHeader'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
import homeWeekend from './components/homeWeekend'
import homeGuess from './components/homeGuess'
export default {
  name: 'home',
  components:{
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot,
    homeWeekend,
    homeGuess
  },
  data(){
    return {
      city:'',
      guessList:[],
      hotPriseList:[],
      hotTrendList:[],
      hotContentList:[],
      iconList:[],
      swiperList:[],
      weekendList:[]

    }
  },
  methods:{
    getHomeData(){
      axios.get("/api/index.json").then(this.getHomeDataSucc)
    },
    getHomeDataSucc(res){
      // console.log(res)
      const data = res.data.data
      if (data) {
        this.city = data.city
        this.guessList = data.guessList
        this.hotPriseList = data.hotPriseList
        this.hotTrendList = data.hotTrendList
        this.hotContentList = data.hotContentList
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
        // console.log(this.weekendList)
      };
    }
  },
  mounted(){
    this.getHomeData()
  }
}
</script>

<style lang="stylus" scoped>
.home
  position:relative
  .home-header
    position:fixed
    top:0
    left:0
    z-index:100
    width:100%

</style>
