<template>
  <div class="header" :class="[showHeader]">
  <div class="header-back" :class="[showBack]">
    <span class="iconfont">&#xe641;</span>
  </div>
  <div class="header-search" :class="[showSearch]">
    <span class="iconfont">&#xe688;</span>
    上海海昌海洋公园
  </div>
  <router-link to="/location">
    <div class="header-city" :class="[showCity]">
      {{city}}
    <span class="iconfont">&#xe65d;</span>
    </div>
  </router-link>

  </div>
</template>

<script>
//引入字体  也可以在main.js中引入,全局使用
// import '@/assets/style/iconfont.css'
export default {
  name: 'homeHeader',
  props:['city'],
  data(){
    return{
      showHeader:'',
      showBack:'',
      showSearch:'',
      showCity:''
    }
  },
  methods:{
    scrollChange(){
      let height = document.documentElement.scrollTop
      // console.log(height)
      if(height>10){
          this.showHeader='showHeader'
          this.showBack='showBack'
          this.showSearch='showSearch'
          this.showCity='showCity'
      }else{
          this.showHeader=''
          this.showBack=''
          this.showSearch=''
          this.showCity=''
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }

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

