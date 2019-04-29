<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="present-area">
        <div class="present-title" ref="present">当前</div>
        <div class="present-button">{{this.city}}</div>
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
          :ref="key"
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
import BMap from 'BMap'
export default {
  name:'locationList',
  props:{
    letter:String,
    cities:Object,
    hotCities:Array
  },
  watch:{
    letter(){
      // console.log(this.letter)
      const elementLetter = this.$refs[this.letter]
      const elementPresent = this.$refs.present
      if (elementLetter) {
          const element = elementLetter[0]
          this.scroll.scrollToElement(element)
      }else{
          this.scroll.scrollToElement(elementPresent)
      }
    }
  },
  data(){
    return{
      city:'',
      // 下面两组数据由axios请求获得从Location.vue父组件传到了props里使用了,这里仅测试用
      // hotCities:[
      //   {id:'0001',name:'北京0'},
      //   {id:'0002',name:'北京1'},
      //   {id:'0201',name:'北京2'},
      //   {id:'0021',name:'北京3'},
      //   {id:'0801',name:'北京9'}
      // ],
      // cities:{
      //   'A':[
      //     {id:'0041',name:'北京0'},
      //     {id:'05001',name:'北京0'},
      //     {id:'00301',name:'北京0'},
      //     {id:'03001',name:'北京0'},
      //     {id:'00701',name:'北京0'},
      //     {id:'00501',name:'北京0'},
      //     {id:'00801',name:'北京0'},
      //     {id:'01201',name:'北京0'},
      //     {id:'0681',name:'北京0'},
      //     {id:'0068601',name:'北京0'},
      //     {id:'0068501',name:'北京0'},
      //     {id:'3535',name:'北京0'},
      //     {id:'0068701',name:'北京0'},
      //     {id:'001',name:'北京0'},
      //     {id:'01',name:'北京0'},
      //     {id:'063001',name:'北京0'},
      //     {id:'780',name:'北京0'}
      //   ],
      //   'B':[
      //     {id:'0202',name:'南京'},
      //     {id:'002',name:'南京'},
      //     {id:'02002',name:'南京'},
      //     {id:'04002',name:'南京'}
      //   ],
      //   'C':[
      //     {id:'02051',name:'北京2'},
      //     {id:'0201',name:'北京2'}
      //   ],
      //   'D':[
      //     {id:'0021',name:'北京3'},
      //     {id:'00521',name:'北京3'}
      //   ],
      //   'E':[
      //     {id:'00801',name:'北京9'},
      //     {id:'115',name:'北京9'},
      //     {id:'155166',name:'北京9'},
      //     {id:'1686',name:'北京9'},
      //     {id:'0565401',name:'北京9'},
      //     {id:'0878601',name:'北京9'},
      //     {id:'866',name:'北京9'},
      //     {id:'085601',name:'北京9'},
      //     {id:'68353',name:'北京9'},
      //     {id:'3453',name:'北京9'},
      //     {id:'5545',name:'北京9'}
      //   ],
      // }
    }
  },
  mounted(){
    let wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper,{
      click:true,
      mouseWheel:{    //随着滚轮滚动
        speed:20,
        invert:false, //
        easeTime:300  //毫秒
      }
    })

    let map = new BMap.Map("allmap")
    let myCity = new BMap.LocalCity()
    myCity.get((result)=>{
      console.log('当前定位地址:',result.name);
      if (result) {
        this.city = result.name
      }else{
        this.city = '获取位置信息失败'
      }

    });
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
