<template>
  <div>
  <div class="search">
    <span class="iconfont">&#xe688;</span>
    <input
      type="text"
      class="search-input"
      placeholder="请输入城市名（如北京、bj、beijing）"
      v-model="keyword"
      :class="[changeSearch]"
    >
    <button
      class="button"
      :class="[changeButton]"
      @click="buttonClear"
    >取消</button>
    <span
      class="cancel"
      :class="[changeSymbol]"
      @click="xClear"
    >X</span>
  </div>
  <div
    class="search-content"
    v-show="this.list.length"
    ref="contentWrapper"
  >
    <ul>
      <li class="search-first">{{this.show}}</li>
      <li
        class="search-item"
        v-for="item of this.list"
        :key="item.id"
        @click="handleItemClick(item.name)"
      >{{item.name}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {disreslove} from '../../../utils/utils.js'
export default {
  name:'locationHeader',
  props:{
    cities:Object
  },
  data(){
    return{
      show:'请输入城市名（如北京、bj、beijing）',
      flag:'',
      keyword:'',
      iLetter:'',
      iWord:'',
      changeSearch:'',
      changeButton:'',
      changeSymbol:'',
      list:[
        // {id:'22',name:'北京'},
        // {id:'56',name:'上海'},
        // {id:'21',name:'北京'},
        // {id:'86',name:'广东'},
        // {id:'96',name:'北京'},
      ],
    }
  },
  methods:{
    handleItemClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    buttonClear(){
      this.keyword=' '
      this.flag='2'
    },
    xClear(){
      this.keyword=' '
      this.flag='33'
    },
    //添加样式的函数
    addClass(){
      this.changeSearch = "changeSearch"
      this.changeButton = "changeButton"
      this.changeSymbol = "changeSymbol"
    },
    //清空样式的函数
    removeClass(){
      this.changeSearch = ""
      this.changeButton = ""
      this.changeSymbol = ""
    },
    removeBack(){
      this.removeClass()//清空样式
      this.list = []  //清空数组
      this.show = ''  //不显示
    },
    showError(){
      this.list = ['']
      this.show = '对不起,找不到 '+this.keyword
    },
    loopAlphabet(lowerContent){
      const citiesWrapper = this.cities//保存一遍数据,因为axios是异步获取数据会导致取不到
      for(let i in citiesWrapper){
        if (i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1) {
          let arr = []
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.spell.substr(lowerContent.length-1,1))
            let a = [...new Set(arr)]
            this.iLetter = a.toString()
          })
        }
      }
    },
    loopWord(content){
      const citiesWrapper = this.cities//保存一遍数据,因为axios是异步获取数据会导致取不到
      for(let i in citiesWrapper){
        //循环获取首字母
        if(i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1){
          let arr = []
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.name.substr(content.length-1,1))
            let a = [...new Set(arr)]
            this.iWord = a.toString()
          })
        }
      }
    },
    searchAlph(content){
      const lowerContent = content.toLowerCase()
      let result = []
      for (let i in this.cities){ //cities为对象
        let haveAlph = i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1
        if (haveAlph) {
          this.cities[i].forEach((value)=>{
            if (value.spell.indexOf(lowerContent)>-1) {
              result.push(value)
              this.list = result
            }else if(lowerContent.indexOf(value.spell)>-1){
              this.show = "对不起,找不到 "+this.keyword
            }else{
              this.loopAlphabet(lowerContent)
              if (!(this.iLetter.indexOf(lowerContent.substr(lowerContent.length-1,1))>-1)) {
                this.show = "对不起,找不到 "+this.keyword
                this.iLetter=''
              }
            }
          })
        }else if(lowerContent.substr(0,1)==='u' || lowerContent.substr(0,1)==='i' || lowerContent.substr(0,1)==='v' || lowerContent.substr(0,1)==='o') {
          this.show = "对不起,找不到 "+this.keyword
          this.list=['']

        }

      }

    }
  },
  watch:{
    keyword(){
      let content = this.keyword.trim()
      this.addClass()// 监听样式绑定
      if(content === ''){
        //内容为空
        /**
         * flag判断是手动删空,还是清空
         * 1-没有输入或逐字删除
         * 2-点清空按钮
         * 其余为点击X按钮
         */
        if (this.flag === '1') {//清空样式
          this.removeBack()
        }else if(this.flag === '2'){//清空样式和内容
          this.keyword = ''
          this.removeBack()
        }else{//只清空内容
          this.keyword = ''
          this.show = ''//
        }
      }else if(/^[0-9]+$/.test(content)){
        //内容为数字
        this.showError()

      }else if(/^[a-zA-Z]+$/.test(content)){
        //内容为字母
        this.searchAlph(content)

      }else if(/^[\u4e00-\u9fa5]+$/.test(content)){
        //内容为汉字
        let result = []
        for (let i in this.cities){
          let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1
          if (haveAlph) {
            this.cities[i].forEach((value)=>{
              if (value.name.indexOf(content)>-1) {
                result.push(value)
                this.list = result
              }else if(content.indexOf(value.name)>-1){
                this.show = "对不起,找不到 "+this.keyword
              }else{
                this.loopWord(content)
                if (!(this.iWord.indexOf(content.substr(content.length-1,1))>-1)) {
                  this.show = "对不起,找不到 "+this.keyword
                  this.iWord=''
                }
              }
            })
          }
        }

      }else{
        //其他内容
        this.showError()

      }
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.contentWrapper,{
      click:true,
      mounseWheel:{
        speed:20,
        invert:false,
        easeTime:300
      }

    })
  },


}
</script>

<style lang="stylus" scoped>
.search
  position:relative
  height:.72rem
  background:#e0e4ec
  padding:.2rem
  .iconfont
    position:absolute
    top:.4rem
    left:.4rem
    color:#666
  .search-input
    height:.72rem
    line-height:.72rem
    width:100%
    text-align:left
    box-sizing:border-box
    padding-left:.6rem
    border-radius:.06rem
    color:#666
  .changeSearch
    width:88%
    margin-right:.1rem
  .button
    display:none
  .changeButton
    display:block
    color:#888
    font-weight:bold
    position:absolute
    top:.29rem
    right:.22rem
    z-index:101
    font-size:.35rem
    text-align:center
  .cancel
    display:none
  .changeSymbol
    display:block
    position:absolute
    top:.32rem
    right:1.3rem
    color:#fff
    z-index:101
    background:#ccc
    padding:.12rem
    border-radius:.2rem
.search-content
  overflow:hidden
  position:absolute
  z-index:101
  top:1.1rem
  left:0
  right:0
  bottom:0
  background:#eee
  .search-first
    line-height:.22rem
    padding:.1rem
    margin-bottom:.06rem
    color:#666
    background:#fff
    font-size:.1rem
    color:#aaa
  .search-item
    line-height:.82rem
    padding-left:.2rem
    margin-bottom:.06rem
    color:#666
    background:#fff


</style>
