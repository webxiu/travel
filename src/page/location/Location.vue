<template>
  <div class="location">
    <location-header></location-header>
    <location-list></location-list>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
export default {
    name:'Loncation',
    components:{
        locationHeader,
        locationList
    }
}
</script>
<style lang="stylus" scoped>


</style>
