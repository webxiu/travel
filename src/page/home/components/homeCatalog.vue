<template>
  <div class="wrapper">
    <div
      class="icon"
      v-for="item of iconList"
      :key="item.id"
    >
      <div class="icon-img">
        <img
          class="img"
          :src="item.imgUrl"
          :class="[item.color]"
        >
      </div>
      <div class="icon-desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
//引入字体  也可以在main.js中引入,全局使用
// import '@/assets/style/iconfont.css'
export default {
  name: 'homeCatalog',
  props:{
    iconList:Array
  },
  data(){
    return{
      // iconList:[
      //   {
      //     id:54,
      //     imgUrl:'https://pic5.40017.cn/01/000/84/4f/rBLkBVmLtaiAcmRaAAAEH9JbM6g234.png',
      //     color:'orange',
      //     desc:'本地热推'
      //   },
      //   {
      //     id:85,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
      //     color:'green',
      //     desc:'亲子游'
      //   },
      //   {
      //     id:351,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/db/rBLkCVmEGfeAVI4FAAAEXdabEDE534.png',
      //     color:'blue',
      //     desc:'温泉预售'
      //   },
      //   {
      //     id:954,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
      //     color:'pink',
      //     desc:'自然风光'
      //   },
      //   {
      //     id:961,
      //     imgUrl:'https://pic5.40017.cn/01/000/84/4f/rBLkBVmLtaiAcmRaAAAEH9JbM6g234.png',
      //     color:'orange',
      //     desc:'本地热推'
      //   },
      //   {
      //     id:963,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
      //     color:'green',
      //     desc:'亲子游'
      //   },
      //   {
      //     id:2321,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/db/rBLkCVmEGfeAVI4FAAAEXdabEDE534.png',
      //     color:'blue',
      //     desc:'温泉预售'
      //   },
      //   {
      //     id:9520,
      //     imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
      //     color:'pink',
      //     desc:'自然风光'
      //   },
      // ]
    }
  }

}
</script>

<style lang="stylus" scoped>
.wrapper
  background:#fff
  padding-top:.2rem
  .icon
    width:25%
    float:left
    .img
      display:block
      background:red
      border-radius:1rem
      margin:0 auto
      width:50%
    .red
      background:#fd6266
    .orange
      background:#fda424
    .green
      background:#6dcf16
    .blue
      background:#41a9f2
    .icon-desc
      text-align:center
      padding-top:.2rem
      padding-bottom:.5rem
</style>

