<template>
  <div class="location">
    <location-header></location-header>
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


</style>
