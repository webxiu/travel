<template>
  <div class="content">
    <div class="allmap" ref="allmap"></div>
    <div class="tab">
      <div
        class="arrow"
        @click="handleArrowClick"
      >{{clickIcon}}</div>
      <navbar v-model="selected">
        <tab-item id="1">酒店</tab-item>
        <tab-item id="2">景点</tab-item>
      </navbar>
      <tab-container v-model="selected">
        <tab-container-item id="1">
          <cell
            v-for="item of addressList[0]"
            :title="item.title"
            :label="item.label"
            :key="item.id"
            @click.native="handleCellClick(item.id)"
          />
        </tab-container-item>
        <tab-container-item id="2">
          <cell
            v-for="item of addressList[1]"
            :title="item.title"
            :label="item.label"
            :key="item.id"
            @click.native="handleCellClick(item.id)"
          />
        </tab-container-item>
      </tab-container>
    </div>

  </div>
</template>

<script>
import {
   Navbar,
   TabItem,
   TabContainer,
   TabContainerItem,
   Cell
 } from 'mint-ui'
 import markerImg from '../../../assets/img/marker.png'
export default {
    name:'mapContent',
    data(){
        return {
            flag:'1',
            clickFlag:'0',
            clickIcon:'▲',
            selected:'1',
            addressList:[
                [
                    {
                    id:'1',
                    label:'深圳会展中心',
                    title:'深圳会展中心'
                    },
                    {
                    id:'2',
                    label:'深圳华为坂田华为基地',
                    title:'深圳华为坂田华为基地'
                    }
                ],
                [
                    {
                    id:'1',
                    label:'深圳市南山区深南大道',
                    title:'深圳市南山区深南大道'
                    },
                    {
                    id:'2',
                    label:'深圳市罗湖区文锦中路1008号',
                    title:'深圳市罗湖区文锦中路1008号'
                    }
                ]
            ]
        }
    },
    components:{
        Navbar,
        TabItem,
        TabContainer,
        TabContainerItem,
        Cell
    },
    methods:{
        handleArrowClick(){
            if (this.clickFlag==='0') {
                this.$refs.allmap.style.height ='20%'
                this.clickFlag='1'
                this.clickIcon='▼'
            }else{
                this.$refs.allmap.style.height ='60%'
                this.clickFlag='0'
                this.clickIcon='▲'
            }
        },
        addMasker(m,n){
            //1.新建地图实例,将挂载点传入
            let map = new BMap.Map(this.$refs.allmap)
            //2.逆地址解析(地址转换到经纬度)
            let myGeo = new BMap.Geocoder()
            // 3. 循环地址改变标注颜色,
            for (let i = 0; i < this.addressList.length; i++) {
                // 4. 周边地址,颜色变为其他
                for (let j = 0; j < this.addressList[i].length; j++) {
                    // 获取地址名称
                    let title = this.addressList[m][n]
                    // 5.传入地址,获得经纬度放在point里
                    myGeo.getPoint(this.addressList[i][j].title,function(point){
                        // console.log(point)

                        if (point) {
                            if (i===m&&j===n) {
                                //6.设置缩放等级
                                map.centerAndZoom(point, 15)
                                // 7.创建图标
                                let myIcon = new BMap.Icon(markerImg, new BMap.Size(50, 50), {
                                    imageOffset: new BMap.Size(14,2)
                                });

                                // 8.创建标注对象并添加到地图
                                let marker = new BMap.Marker(point, {icon: myIcon})
                                map.addOverlay(marker)
                                // 9.开启鼠标滚轮缩放
                                map.enableScrollWheelZoom(true)
                            /* //显示定位导航控件(放大/缩小)
                                let navigationControl = new BMap.NavigationControl({
                                     anchor: BMAP_ANCHOR_TOP_LEFT,           //靠左上角位置
                                     type: BMAP_NAVIGATION_CONTROL_LARGE,    //LARGE类型
                                     enableGeolocation: true                 // 启用显示定位
                                 });
                                 map.addControl(navigationControl);
                            */

                                // console.log(title)
                                // 10.添加信息窗口标注
                                let infoWindow = new BMap.InfoWindow(title.title)
                                infoWindow.setWidth(250)
                                infoWindow.setHeight(60)
                                //设置标注标题
                                // infoWindow.setTitle('【当前位置】')
                                // 获取中心点标注到地图上
                                map.openInfoWindow(infoWindow,map.getCenter())
                            }else{
                                //6.设置缩放等级
                                map.centerAndZoom(point, 15)
                                // 8..创建标注对象并添加到地图
                                let marker = new BMap.Marker(point)
                                map.addOverlay(marker)

                            }
                        }else{
                            cosole.log('找不到该位置')
                        }

                    })
                };
            };
        },
        //公共调调用函数
        changeMasker(id){
            let page = parseInt(this.flag)-1
            let index = parseInt(id)-1
            this.addMasker(page,index)
        },
        handleCellClick(id){
            if(this.flag==='1'){
                this.changeMasker(id)
            }else{
                this.changeMasker(id)
            }
        }
    },
    watch:{
        selected(val){
            if(val==='1'){
                this.flag='1'
            }else{
                this.flag='2'
            }
        }
    },
    mounted(){
        //传入地址的下标 0,0
        this.addMasker(0,0)
    }

}
</script>

<style lang="stylus" scoped>
.content
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
  background:#fff
  z-index:100
  .allmap
    position:relative
    top:0
    left:0
    right:0
    bottom:.6rem
    z-index:11111
    height:60%
  .tab
    color:#000
    .arrow
      text-align:center
</style>
