import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import MoviesIndex from '@/components/movies/Index'
import MoviesShow from '@/components/movies/Show'
import MoviesNew from '@/components/movies/New'
import ActorsIndex from '@/components/actors/Index'
import ActorsShow from '@/components/actors/Show'
import ActorsNew from '@/components/actors/New'
import GenresIndex from '@/components/genres/Index'
import GenresShow from '@/components/genres/Show'
import GenresNew from '@/components/genres/New'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
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
    },
    {
      path: '/actors',
      name: 'Actors',
      component: ActorsIndex
    },
    {
      path: '/actors/new',
      name: 'New Actor',
      component: ActorsNew
    },
    {
      path: '/actors/:id/edit',
      name: 'Edit Actor',
      component: ActorsNew
    },
    {
      path: '/actors/:id',
      name: 'Actor',
      component: ActorsShow
    },
    {
      path: '/genres',
      name: 'Genres',
      component: GenresIndex
    },
    {
      path: '/genres/new',
      name: 'New Genre',
      component: GenresNew
    },
    {
      path: '/genres/:id/edit',
      name: 'Edit Genre',
      component: GenresNew
    },
    {
      path: '/genres/:id',
      name: 'Genre',
      component: GenresShow
    }
  ]
})
