<template>
  <div>
    <ul class="list">
      <li
        v-for="item in alphabetList"
        :key="item.id"
        @click="handleLettedClick"
      >{{item.content}}</li>
    </ul>
    <div
      class="connect"
      ref="distance"
      :style="hidden"
      >{{this.content}}</div>

  </div>
</template>

<script>

export default {
  name:'locationAlphabet',
  data(){
    return{
      hidden:{
        display:'none'
      },
      content:'',
      alphabetList:[
        {id:'11',content:'当前'},
        {id:'22',content:'热门'},
        {id:'33',content:'A'},
        {id:'44',content:'B'},
        {id:'55',content:'C'},
        {id:'70',content:'D'},
        {id:'77',content:'E'},
        {id:'88',content:'F'},
        {id:'99',content:'G'},
        {id:'12',content:'H'},
        {id:'14',content:'I'},
        {id:'15',content:'J'},
        {id:'16',content:'K'},
        {id:'17',content:'L'},
        {id:'34',content:'M'},
        {id:'63',content:'N'},
        {id:'91',content:'O'},
        {id:'83',content:'P'},
        {id:'69',content:'Q'},
        {id:'66',content:'R'},
        {id:'87',content:'S'},
        {id:'98',content:'T'},
        {id:'67',content:'U'},
        {id:'56',content:'V'},
        {id:'51',content:'W'},
        {id:'52',content:'X'},
        {id:'53',content:'Y'},
        {id:'54',content:'Z'}
      ]
    }
  },
  methods:{
    handleLettedClick(e){
      this.content = e.target.innerText
      /**
       * 派发事件给城市列表锚点,携带内容:this.content
       * 到Location.vue接收
       */
      this.$emit("change",this.content)
      // console.log(this.content)
      for (var i = 0; i < this.alphabetList.length; i++) {
        if (this.content === this.alphabetList[i].content) {
          let dis = 0.5 + ((i+1)*0.41)
          const showElement = this.$refs.distance
          showElement.style ="display:block"
          showElement.style ="top:"+dis+"rem"
          setTimeout(function() {
            showElement.style ="display:none"
          },500)
        }
      }

    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    position: fixed
    top:1.15rem
    right:0
    z-index:200
    text-align:center
    width:15%
    color:#53cabf
    background:#eff1f5
    padding-bottom:100rem
    opacity:.7
  .list>li
    margin-top:.1rem
    font-weight:700
  .connect
    position: absolute
    top:1.1rem
    right:1.1rem
    z-index:200
    text-align:center
    background:rgba(80,180,0,.7)
    border-radius:.07rem
    color:#fff
    padding:.1rem
    margin-right:.2rem

</style>
