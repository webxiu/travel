<template>
  <div class="guess">
    <div
      class="guess-desc"
      :class="[guessDescChange]"
    >
      <div>猜你喜欢</div>
    </div>
    <router-link
      tag="div"
      class="guess-content"
      v-for="item of guessList"
      :key="item.id"
      :to='"/detail/"+item.id'
   >
      <div class="guess-content-img">
        <img :src="item.imgUrl">
        <div>{{item.rank}}</div>
      </div>
      <div class="guess-content-desc">
        {{item.desc}}
      </div>
      <div class="guess-content-price">
        <div class="guess-content-price-left" >
          酒店距景点{{item.distance}}km
        </div>
        <div class="guess-content-price-right" >
          <span>￥</span>{{item.price}}<span>起</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeGuess',
  data(){
    return {
      guessDescChange:'',
      guessList:[
        {
          id:"0001",
          imgUrl:"https://pic4.40017.cn/scenery/destination/2016/07/19/14/3gIGb5_420x228_00.jpg",
          crite:"14点评  90%满意度",
          logo:"同城专属",
          desc:"宿溧阳竹海风情温泉酒店，自选天目湖南山竹海/天目湖御水温泉等",
          distance:"17.34",
          price:"299"
        },
        {
          id:"0002",
          imgUrl:"https://pic5.40017.cn/02/000/be/ca/rBANDFnRm9yAIcKpAAd0bfhGxZk791_420x228_00.JPG",
          crite:"148点评  70%满意度",
          logo:"同城专属",
          desc:"【近南山竹海】住安雲·悦南山度假酒店，自选天目湖南山竹海/山水园/御水温泉等【天目湖休闲游】",
          distance:"1.34",
          price:"699"
        },
        {
          id:"0003",
          imgUrl:"https://pic5.40017.cn/02/001/6e/fe/rBANDFm6LDCATqynAAFzVl_gM04602_420x228_00.jpg",
          crite:"8点评  100%满意度",
          logo:"同城专属",
          desc:"自选东方盐湖城景区内山居客栈1晚（含早），乐游东方盐湖城",
          distance:"7.4",
          price:"284"
        },
        {
          id:"0004",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/03/17/11/506Nl6_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"【引爆双早双晚399】扬州中集格兰云天大酒店+自选瘦西湖/个园/瘦西湖温泉+双人早餐",
          distance:"1.34",
          price:"269"
        },
        {
          id:"0005",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg",
          crite:"8点评  100%满意度",
          logo:"同城专属",
          desc:"上海崇明东平国家森林公园房车1晚+森林公园门票2张+双人早餐",
          distance:"7.00",
          price:"299"
        },
        {
          id:"0006",
          imgUrl:"https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"无锡拈花客栈1晚，游拈花湾，自选酒店自助晚餐/禅食餐【灵山胜境】【亲子精选】",
          distance:"1.34",
          price:"289"
        },
        {
          id:"0007",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/03/26/20/qLpvQc_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"住横店旗下酒店1晚,自选横店影视城各景点、梦泉谷、梦幻谷(含演出)【横店2日游】",
          distance:"34",
          price:"239"
        },
        {
          id:"0008",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/03/17/12/ua9Ic2_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"游黄山，自选景区内山顶酒店（北海/狮林/白云/西海/排云楼/光明顶）",
          distance:"134",
          price:"249"
        },
        {
          id:"0009",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/03/26/20/qLpvQc_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"住宋城千古情主题酒店（杭州西湖店），自选杭州宋城千古情景区，预订套餐包含贵宾席演出票！",
          distance:"14",
          price:"69"
        },
        {
          id:"00010",
          imgUrl:"https://pic5.40017.cn/01/001/31/a0/rBANC1vaeM6AAnKsAAC6cdvPNUE365_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"天目湖涵庭假日山庄，与友相聚、尽兴欢愉，山水园/涵田温泉等多套餐自选【精选度假酒店】",
          distance:"34",
          price:"2669"
        },
        {
          id:"00011",
          imgUrl:"https://pic3.40017.cn/zzy/rimage/2015/03/24/17/oc97dU_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"住景区内西塘华源轩主题客栈，游西塘古镇，感受温柔淳朴的古镇韵味【错峰避人群、更优惠】",
          distance:"14",
          price:"669"
        },
        {
          id:"00012",
          imgUrl:"https://pic5.40017.cn/02/000/2b/df/rBLkCFqTxOaAbkgzAAHHOxTJQLg483_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"【引爆双早双晚399】住扬州中集格兰云天大酒店+自选双人晚餐/瘦西湖温泉+双人早餐",
          distance:"14",
          price:"399"
        },
        {
          id:"00013",
          imgUrl:"https://pic5.40017.cn/01/001/88/2b/rBANC1pcSaeAHwylAALZx0R6pkw234_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"【近南山竹海】住溧阳南山康鸿度假酒店，自选天目湖南山竹海/天目湖御水温泉/天目湖山水园等",
          distance:"145",
          price:"6955"
        },
        {
          id:"00014",
          imgUrl:"https://pic4.40017.cn/scenery/destination/2016/07/19/17/lziIen_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"常州明都枫泽山庄大酒店1晚，自选淹城野生动物园景点/常州明都枫泽山庄大酒店自助晚餐套餐",
          distance:"14",
          price:"69"
        },
        {
          id:"00015",
          imgUrl:"https://pic5.40017.cn/02/000/54/fb/rBANDFtHJ3yAE7pWAAE0a3dx4Zo142_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"入住句容碧桂园凤凰城酒店+双份自助早餐+自选汤山一号温泉/颐尚温泉/紫清湖温泉",
          distance:"14",
          price:"69"
        },
        {
          id:"00016",
          imgUrl:"https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早餐，免费泳池健身房【亲子精选】",
          distance:"154",
          price:"629"
        },
        {
          id:"00017",
          imgUrl:"https://pic4.40017.cn/scenery/destination/2017/02/27/14/MVDO1w_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"宿无锡绿羊温泉度假酒店，泡无锡绿羊温泉，闭目养神，享受林间温泉",
          distance:"14",
          price:"69"
        },
        {
          id:"00018",
          imgUrl:"https://pic4.40017.cn/scenery/destination/2017/01/23/17/XeJ3ph_420x228_00.jpg",
          crite:"18点评  100%满意度",
          logo:"同城专属",
          desc:"住上海柏思特酒店，享儿童乐园，游上海迪士尼乐园【亲子精选】【亲子主题】",
          distance:"14",
          price:"869"
        },
        {
          id:"00019",
          imgUrl:"https://pic4.40017.cn/zzy/rimage/2016/10/10/23/mVRN8E_420x228_00.jpg",
          crite:"18点评  100%满意度",
          desc:"常州恐龙主题度假酒店1晚+恐龙人俱乐部5选1，自选恐龙园景点门票或自助晚餐",
          logo:"同城专属",
          distance:"14",
          price:"269"
        },
        {
          id:"00020",
          imgUrl:"https://pic5.40017.cn/02/000/62/5a/rBANDFoFdVOAS6rOAAL2qonaRWU933_420x228_00.jpg",
          crite:"18点评  100%满意度",
          desc:"住无锡318文化大院，游灵山小镇拈花湾（相距约3公里）",
          logo:"同城专属",
          distance:"124",
          price:"649"
        }
      ]
    }
  },
  methods:{
    scrollChange(){
      //获取滚动距离
      let scrollHeight = document.documentElement.scrollTop
      if (scrollHeight>773) {
        this.guessDescChange='guessDescChange';
      }else{
        this.guessDescChange='';
      }
    }

  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }

}
</script>

<style lang="stylus" scoped>
.guess
  border-top:.2rem solid #eee
  background:#fff
  .guess-desc
    overflow:hidden
    height:0
    padding-bottom:10%
    text-align:center
    color:#23beae
  .guessDescChange
    position:fixed
    top:.9rem
    left:0
    width:100%
    background:#fff
    z-index:100
  .guess-desc > div
    overflow:hidden
    width:25%
    height:0
    padding-bottom:6%
    margin:0 auto
    padding-top:.23rem
    border-bottom:.1rem solid #23beae
  .guess-content
    overflow:hidden
    width:92%
    height:0
    padding-bottom:64%
    margin:0 auto
    padding-top:.2rem
    border-top:.05rem solid #eee
    .guess-content-img
      position:relative
      overflow:hidden
      height:0
      padding-bottom:48.3%
    .guess-content-img >img
      max-width:100%
    .guess-content-img >div
      position:absolute
      bottom:.2rem
      left:.1rem
      color:#fff
    .guess-content-desc
      overflow:hidden
      height:0
      padding-bottom:12%
      text-align:left
      padding-top:.1rem
      text-indent:.1rem
      font-size:.28rem
      font-weight:bold
      letter-spacing:.01rem
      line-height:.35rem
    .guess-content-price
      overflow:hidden
      height:0
      padding-bottom:10%
      .guess-content-price-left
        float:left
        color:#aaa
      .guess-content-price-right
        float:right
        margin-right:.1rem
      .guess-content-price-right > span
        color:red
        font-weight:bold
        font-size:.4rem
</style>
