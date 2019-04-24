<template>
  <div class="week">
    <div class="week-desc">
      <div class="week-desc-content">
        ///////////<span>周末出游</span>///////////
        <p>致力推荐超完美套餐</p>
      </div>
    </div>

    <div class="week-swiper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="item of weekendList"
          :key="item.id"
        >
          <div class="weekSwiper-item">
            <div class="weekSwiper-item-img">
              <img :src="item.imgUrl">
            </div>
            <div class="weekSwiper-item-desc">
              {{item.desc}}
              <p>{{item.detail}}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data(){
    return {
      weekendList:[
        {
          id:"0001",
          imgUrl:"https://pic5.40017.cn/02/000/33/66/rBLkCFs0Tr6AXiFPAABmgwDtp7o002_280x190_00.jpg",
          desc:"拈花湾",
          detail:"禅意假日 古韵风光"

        },
        {
          id:"0002",
          imgUrl:"https://pic5.40017.cn/01/000/00/9c/rBANC1vD9_GAb2qVAAD1zTnOfl0327_280x190_00.jpg",
          desc:"迪士尼",
          detail:"点亮心中奇梦"
        },
        {
          id:"0003",
          imgUrl:"https://pic5.40017.cn/01/001/f8/b2/rBLkBlsWe--AYOxAAABvztYw1fM559_280x190_00.jpg",
          desc:"东方盐湖城 · 道天下",
          detail:"茅山脚下的逍遥山镇"
        },
        {
          id:"0004",
          imgUrl:"https://pic5.40017.cn/02/000/f8/b9/rBLkCFsWfOSAKWiGAABRaPAf0aA516_280x190_00.jpg",
          desc:"天目湖",
          detail:" 肆意山水 古街温泉 "
        },
        {
          id:"0005",
          imgUrl:"https://pic5.40017.cn/01/001/f8/b2/rBLkBlsWe--AYOxAAABvztYw1fM559_280x190_00.jpg",
          desc:"揭阳湖",
          detail:"山水人间 肆意快活"
        },
        {
          id:"0006",
          imgUrl:"https://pic5.40017.cn/02/000/f8/b9/rBLkCFsWfOSAKWiGAABRaPAf0aA516_280x190_00.jpg",
          desc:"天目湖",
          detail:"竹海山水 温泉古街"
        }
      ],
      swiperOption:{
        freeMode:true,
        spaceBetween:20,
        slidesPerView:3
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
.week
  overflow:hidden
  height:0
  padding-bottom:58%
  border-top:.2rem solid #eee
  .week-desc
    position:relative
    overflow:hidden
    height:0
    padding-bottom:15.5%
    .week-desc-content
      text-align:center
      color:#aaa
      position:absolute
      top:50%
      left:50%
      transform:translate(-50%,-50%)
    .week-desc-content>span
      display:inline-block
      color:#000
      font-weight:bold
      margin:.15rem .3rem
  .week-swiper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:84.5%
    .weekSwiper-item
      overflow:hidden
      width:100%
      height:0
      padding-bottom:120%
      margin-left:.2rem
      border:.02rem solid #ccc
      .weekSwiper-item-img
        overflow:hidden
        height:0
        padding-bottom:67.9%
      .weekSwiper-item-img>img
        max-width:100%
      .weekSwiper-item-desc
        text-align:center
        padding-top:.3rem
      .weekSwiper-item-desc>p
        display:inline-block
        margin-top:.1rem

</style>
