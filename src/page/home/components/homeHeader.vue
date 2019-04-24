<template>
  <div class="header">
    <div class="header-back">
        <span class="iconfont">&#xe641;</span>
    </div>
    <div class="header-search">
         <span class="iconfont">&#xe688;</span>
         上海海昌海洋公园
    </div>
    <div class="header-city">
         北京
        <span class="iconfont">&#xe65d;</span>
    </div>
  </div>
</template>

<script>
//引入字体  也可以在main.js中引入
import '@/assets/style/iconfont.css'
export default {
  name: 'homeHeader',

}
</script>

<style lang="stylus" scoped>
.showHeader
  background:#fff
.header
  line-height:.88rem
  text-align:center
  display:flex
  .showBack
    color:#000
  .header-back
    float:left
    width:.9rem
  .header-search
    flex:1
    height:.6rem
    line-height:.6rem
    margin-top:.2rem
    margin-left:.2rem
    margin-right:.2rem
    border-radius:.5rem
    box-shadow:0 0 .01rem .02rem #ccc
  .showSearch
    color:#aaa
    background:#eee
  .header-city
    float:right
    width:1.4rem
  .showCity
    color:#000
</style>

