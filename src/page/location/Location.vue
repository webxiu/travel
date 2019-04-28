<template>
  <div class="location">
    <location-header></location-header>
    <location-list :letterData="letterData"></location-list>
    <location-alphabet @change="handleLettedChange"></location-alphabet>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'
export default {
    name:'Loncation',
    data(){
        return{
            letterData:''
        }
    },
    methods:{
        handleLettedChange(letter){
            this.letterData = letter
        }
    },
    components:{
        locationHeader,
        locationList,
        locationAlphabet
    }
}
</script>
<style lang="stylus" scoped>


</style>
