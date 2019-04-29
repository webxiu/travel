<template>
  <div class="header">
    <div 
      class="left"
      @click="handleBackClick"
    >
        <span class="iconfont">&#xe79b;</span>
    </div>
    <div class="middle">景点+酒店</div>
    <div class="right">
        <span class="iconfont">&#xe637;</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'detailHeader',
    methods:{
        handleBackClick(){
            this.$router.go(-1)
        }
    }

}
</script>
<style lang="stylus" scoped>
.header
  line-height:.88rem
  background:#fff
  display:flex
  .left
    float:left
    margin-left:.2rem
    color:#23beae
  .middle
    flex:1
    text-align:center
    font-weight:bold
  .right
    float:right
    padding-right:.5rem
    color:#23beae
</style>
