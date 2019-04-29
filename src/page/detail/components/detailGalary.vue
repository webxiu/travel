<template>
  <div class="galary">
    <ly-tab
      v-model="selectedId"
      :items="items"
      class="tabColor"
      :options="options"
      @change="handleClick"
    >
    </ly-tab>
    <div class="cate">
        <span>全部</span>
        <span>其他</span>
    </div>
    <!-- 动态组件 -->
    <component :is="type"></component>
  </div>
</template>

<script>
import galaryContent from './galaryContent'
export default {
    name:'detailGalary',
    data(){
      return{
        type:'galaryContent',//组件传过来的名字
        galaryList:[
          '阳光友谊客栈',
          '阳光友谊客栈',
          '阳光友谊客栈',
          '阳光友谊客栈',
          '阳光友谊客栈',
        ],
        selectedId: 0,
        items: [
          // {label: '首页'},
          // {label: '推荐'},
          // {label: 'Android'},
          // {label: '前端'},
          // {label: '后端'},
          // {label: 'iOS'},
          // {label: '产品'},
          // {label: '人工智能'},
          // {label: '设计'}
        ],
        options: {
          activeColor: '#0bc071'
        },
      }
    },
    methods:{
      //获取点击的是哪个组件,让tab显示对应的数据
      handleClick(item,index){//两个默认参数
        console.log(22222)
        this.$store.state.index = index
      }
    },
    components:{
      galaryContent
    },
    computed:{//不能自动执行
      loopGalaryList(){
        for (let i=0;i<this.galaryList.length;i++) {
          let item = {label:this.galaryList[i]}
          this.items.push(item)
        }
      }
    },
    mounted(){
      this.loopGalaryList
    }
}
</script>
<style lang="stylus" scoped>
.galary
  position:absolute
  top:.88rem
  left:0
  right:0
  bottom:0
  color:#fff
  z-index:100
  background:#fff
  .galary>a
    color:#000
  .tabColor
    background:#fff
    border-color:#fff
  .cate
    background:#edf0f5
    line-height:.6rem
    color:#000
  .cate > span
    margin-left:.22rem
    font-size:.3rem
  .wrapper
    background:#fff
    .imgWrapper
      width:47%
      background:red
      margin:.12rem
      float:left
    .imgWrapper > img
      width:100%
</style>
