import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Location from '@/page/location/Location'
import Detail from '@/page/detail/Detail'
import detailGalary from '@/page/detail/components/detailGalary'
import mapContent from '@/page/detail/components/mapContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      children:[
        {
          path:'galary',
          component:detailGalary
        },
        {
          path:'map',
          component:mapContent
        }
      ]
    }
  ]
})
