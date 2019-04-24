<template>
  <div class="hot">
    <div class="hot-left">
      <div class="left-counter">
        <div class="limit">限时抢购</div>
        <div class="count">
          距结束 <span>02</span>:<span>04</span>:<span>08</span>
        </div>
      </div>

      <div
        class="left-content"
        v-for="item of hotContentList"
        :key="item.id"
      >
        <div class="content-img">
          <img :src="item.imgUrl">
        </div>
        <div class="content-desc">{{item.desc}}</div>
      </div>

      <div
        class="left-price"
        v-for="item of hotPriceList"
        :key="item.id"
      >
        <div class="price-sale">
          限量<span>{{item.num}}份</span>
        </div>
        <div class="price-num">
          <span>￥</span>{{item.price}}<span>起</span>
        </div>
      </div>

    </div>
    <div class="hot-right">
      <div
        class="right-item"
        v-for="item of hotTrendList"
        :key="item.id"
      >
        <div class="item-desc">
          {{item.desc}}
          <p>{{item.crite}}</p>
        </div>
        <div class="item-img">
          <img class="img" :src="item.imgUrl">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homeHot',
  data(){
    return{
      hotContentList:[
        {
          id:694,
          imgUrl:'https://pic5.40017.cn/01/000/9d/d9/rBLkBlmSl26AACtXAALg8QhHckM352_100x100_00.jpg',
          desc:'上海野生动物园成人票2张+上海浦东机场莎海国际酒店豪华双床房1晚'
        },
      ],
      hotPriceList:[
        {
          id:594,
          num:95,
          price:9986
        },
      ],
      hotTrendList:[
        {
          id:641,
          desc:'温泉爆款',
          crite:'又到一年温泉季',
          imgUrl:'https://pic5.40017.cn/01/000/65/88/rBANC1usNjyAWsDJAACkawp55dU429_100x100_00.png',
        },
        {
          id:601,
          desc:'周末不涨价',
          crite:'真的太划算',
          imgUrl:'https://pic5.40017.cn/01/001/30/4e/rBLkBVvaYoWANDJ-AABpXE0IzGY734_100x100_00.png',
        },
      ]
    }
  }


}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixins.styl'
.hot
  clear:left
  border-top:.2rem solid #eee
  overflow:hidden
  height:0
  padding-bottom:28.5%
  background:#fff
  .hot-left
    overflow:hidden
    width:50%
    height:0
    padding-bottom:50%
    float:left
    backfround:#fff
    .left-counter
      overflow:hidden
      width:100%
      height:0
      padding-bottom:14.15%
      .limit
        font-weight:bold
        color:red
        float:left
        padding:.2rem 0
      .count
        float:right
        padding:.2rem
      .count>span
        background:#000
        color:#fff
    .left-content
      overflow:hidden
      width:100%
      height:0
      padding-bottom:31.7%
      float:left
      display:flex
      min-width:0
      .content-img
        overflow:hidden
        width:31.7%
        height:0
        padding-bottom:31.7%
      .content-img>img
        max-width:100%
        padding:.1rem
      .content-desc
        overflow:hidden
        width:68.3%
        padding-bottom:31.7%
        margin-left:.1rem
        ellipsis()
        line-height:.42rem
    .left-price
      overflow:hidden
      width:100%
      height:0
      padding-bottom:14.15%
      .price-sale
        float:left
        font-weight:bold
        margin-left:.1rem
        margin-top:.1rem
      .price-sale > span
        display:inline-block
        color:#aaa
      .price-num
        float:right
        margin-right:.2rem
        color:red
  .hot-right
    overflow:hidden
    width:49%
    height:0
    padding-bottom:49%
    border-left:.05rem solid #eee
    background:#fff
    .right-item
      position:relative
      overflow:hidden
      width:100%
      height:0
      padding-bottom:29.5%
      background:#fff
      border-bottom:.03rem #eee solid
      .item-desc
        padding:.2rem
        font-weight:bold
      .item-desc > p
        color:#ccc
        margin-top:.2rem
      .img
        position:absolute
        top:0
        right:0
        max-width:100%
        max-height:100%
</style>
