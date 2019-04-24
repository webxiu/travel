<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(item,key) in headerImg" :key="item.id"><img :src="item.imgUrl"></swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
//引入字体  也可以在main.js中引入
import '@/assets/style/iconfont.css'
export default {
  name: 'homeSwiper',
  data(){
    return {
      headerImg:[
        {
          id:1001,
          imgUrl:'https://pic5.40017.cn/03/000/d5/6b/rB5oQFx4846ATjD9AAMGEUvrZHQ915_520x218_00.jpg'
        },
        {
          id:2002,
          imgUrl:'https://pic5.40017.cn/03/000/28/73/rB5oQFxG7M2AOgxwAADChAKgVcA559_520x218_00.jpg'
        },
        {
          id:20023,
          imgUrl:'https://pic5.40017.cn/01/000/31/71/rBANC1sy7-iAaElXAADxiWL4LPo263_520x218_00.jpg'
        },
      ],
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background:#fff
.swiper-img
  width:100%

</style>

