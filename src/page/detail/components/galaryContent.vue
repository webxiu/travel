<template>
  <div class="galary-content">
    <div class="wrapper">
      <!-- 下面的this.index是在store保存的index -->
      <div
        class="imgWrapper"
        v-for="item of imgList[this.index][this.index]"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          @click="handlePictureClick(item.id)"
        >
      </div>
    </div>
    <div
      class="galary"
      v-show="show"
      :length="length"
    >
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="item of imgList[this.index][this.index]"
          :key="item.id"
          >
          <div class="galary-desc">{{parseInt(item.id)+1}}/{{length}}</div>
          <div class="galary-img">
            <img :src="item.imgUrl">
          </div>
        </swiper-slide>
      </swiper>
      <span
        class="cancelBtn"
        @click="handlePictureBackClick"
      >X</span>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'galaryContent',
    computed:mapState(['index']),//在computed映射index,在上方this.index就可以直接调用了
    methods:{
      handlePictureClick(){
        this.length = this.imgList[this.index][this.index].length
        this.show=true
      },
      handlePictureBackClick(){
        this.show=false
      }
    },
    data(){
      return{
        show:false,
        length:1,
        swiperOption:{
          loop:false
        },
        imgList:[
          {
            "0":[
              {
                "id":"0",
                "imgUrl":"https://pic5.40017.cn/01/001/2f/fc/rBANC1vabJOAQMdNAAEHfj2vicQ449_320x160_00.jpg"
              },
              {
                "id":"1",
                "imgUrl":"https://pic5.40017.cn/01/000/30/78/rBLkBVvabJOAd2FCAAEHfj2vicQ478_320x160_00.jpg"
              },
              {
                "id":"2",
                "imgUrl":"https://pic5.40017.cn/03/000/6f/0d/rB5oQFv0iGeASB7JAACjKNS31oA801_320x160_00.jpg"
              },
              {
                "id":"3",
                "imgUrl":"https://pic5.40017.cn/03/000/be/58/rB5oQFv7piCATmh9AADcdnkM79Y629_320x160_00.jpg"
              }
            ]
          },
          {
            "1":[
              {
                "id":"0",
                "imgUrl":"https://pic5.40017.cn/01/001/cf/f6/rBLkBVp0IB-ARCPJAAKRqsCY21E518_320x160_00.jpg"
              },
              {
                "id":"1",
                "imgUrl":"https://pic5.40017.cn/01/001/cf/f6/rBLkBVp0IB-AfevzAAKQm68EeKQ361_320x160_00.jpg"
              },
              {
                "id":"2",
                "imgUrl":"https://pic5.40017.cn/01/001/cf/f6/rBLkBVp0IB-ARCPJAAKRqsCY21E518_320x160_00.jpg"
              }
            ]
          },
        ]
      }
    },


}
</script>
<style lang="stylus" scoped>
.wrapper
    background:#fff
    .imgWrapper
      width:47%
      background:#aaa
      margin:.12rem
      float:left
    .imgWrapper > img
      width:100%
.galary
  position:absolute
  top:-0.86rem
  left:0
  right:0
  bottom:0
  background:#000
  color:#fff
  .galary-desc
    text-align:center
    font-size:.3rem
    padding:1.2rem
  .galary-img
    margin-top:2rem
  .galary-img>img
    width:100%
  .swiper-pagination
    color:#fff
    bottom:7.5rem
  .cancelBtn
    font-size:.5rem
    position:relative
    left:49%
    bottom:-2.5rem
    color:#fff
</style>