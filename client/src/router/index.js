import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import MoviesIndex from '@/components/movies/Index'
import MoviesShow from '@/components/movies/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesIndex
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: MoviesShow
    }
  ]
})
