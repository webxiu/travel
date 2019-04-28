<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="present-area">
        <div class="present-title">当前</div>
        <div class="present-button">正在获取位置信息</div>
      </div>
      <div class="hot-area">
        <div class="hot-title">热门城市</div>
        <div class="hot-list">
          <div
            class="hot-button"
            v-for="item in hotCities"
            :key="item.id"

          >{{item.name}}</div>
        </div>
      </div>
      <div class="alph-area">
        <div
          class="alph-wrapper"
          v-for="(item,key) in cities"
          :key="key"
          >
          <div class="alph-title">{{key}}</div>
          <div class="alph-list">
            <div
              class="alph-button"
              v-for="list in item"
              :key="list.id"
              >{{list.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'locationList',
  data(){
    return{
      hotCities:[
        {id:'0001',name:'北京0'},
        {id:'0002',name:'北京1'},
        {id:'0201',name:'北京2'},
        {id:'0021',name:'北京3'},
        {id:'0801',name:'北京9'}
      ],
      cities:{
        'A':[
          {id:'0041',name:'北京0'},
          {id:'0001',name:'北京0'}
        ],
        'B':[
          {id:'0202',name:'南京'},
          {id:'002',name:'南京'},
          {id:'02002',name:'南京'},
          {id:'04002',name:'南京'}
        ],
        'C':[
          {id:'02051',name:'北京2'},
          {id:'0201',name:'北京2'}
        ],
        'D':[
          {id:'0021',name:'北京3'},
          {id:'00521',name:'北京3'}
        ],
        'E':[
          {id:'00801',name:'北京9'},
          {id:'0801',name:'北京9'}
        ],
      }
    }
  },
  mounted(){
    let wrapper = this.$refs.wrapper
    const scroll = new BScroll(wrapper,{
      click:true,
      mouseWheel:{    //随着滚轮滚动
        speed:20,
        invert:false, //
        easeTime:300  //毫秒
      }
    })
  }
}

</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border:.04rem solid #ccc
.list
  overflow:hidden
  background:#e9ecf1
  position:absolute
  top:1.12rem
  left:0
  bottom:0
  width:100%
  z-index:1
  .hot-list
    overflow:hidden
  .present-title,.hot-title,.alph-title
    margin-left:.4rem
    padding:.4rem 0
  .hot-title
    margin-bottom:-.3rem
  .present-button,.hot-button,.alph-button
    line-height:.44rem
    padding:.2rem .2rem
    background:#fff
  .present-button
    width:84%
    margin-left:.2rem
  .hot-button
    width:15%
    float:left
    margin-left:.2rem
    text-align:center
    margin-top:.2rem
  .alph-button
    width:100%
    padding-left:.4rem





</style>
