import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import MoviesIndex from '@/components/movies/Index'
import MoviesShow from '@/components/movies/Show'
import MoviesNew from '@/components/movies/New'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesIndex
    },
    {
      path: '/movies/new',
      name: 'New Movie',
      component: MoviesNew
    },
    {
      path: '/movies/:id/edit',
      name: 'Edit Movie',
      component: MoviesNew
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: MoviesShow
    }
  ]
})
