<template>
  <div class="location">
    <div class="load" v-if="loading">加载中...</div>
    <location-header :cities="cities"></location-header>
    <location-list
        :letter="letter"
        :cities="cities"
        :hotCities="hotCities"
    ></location-list>
    <location-alphabet
        @change="handleLettedChange"
        :alphabetList="alphabetList"
    ></location-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'
export default {
    name:'Loncation',
    data(){
        return{
            loading:true,
            letter:'',
            cities:{},
            hotCities:[],
            alphabetList:[],
        }
    },
    methods:{
        handleLettedChange(letter){
            this.letter = letter
        },
        getLocationData(){
            axios.get('/api/city.json').then(this.getCityData)
        },
        getCityData(res){
            const data = res.data.data
            // console.log(data)
            if (data) {
                this.loading = false
                this.cities = data.cities
                this.hotCities = data.hotCities
                this.alphabetList = data.alphabetList
            };

        }
    },
    components:{
        locationHeader,
        locationList,
        locationAlphabet
    },
    mounted(){
        this.getLocationData()
    }
}
</script>
<style lang="stylus" scoped>
.load
  position:absolute
  top:7rem
  left:3.5rem
  z-index:1011
  width:1.8rem
  height:.5rem
  line-height:.5rem
  border-radius:.1rem
  opacity:.5
  background:#000
  color:#fff
  text-align:center
</style>