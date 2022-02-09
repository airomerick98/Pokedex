import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListPokemon from '../views/pokemon-list.vue'
import DetailPokemon from '../views/detail-pokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'pokemon-list',
    component: ListPokemon,
    children: [
      {
        path: 'detalle/:name',
        name: 'detail-pokemon',
        component: DetailPokemon,
        props: true,
      },
    ],
  },
  {
    path: '/favoritos',
    name: 'pokemon-favorites',
    component: ListPokemon,
    children: [
      {
        path: 'detalle/:name',
        name: 'detail-favorite',
        component: DetailPokemon,
        props: true,
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
