import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ThemeDetail from '../pages/ThemeDetail.vue'
import Panier from '../pages/Panier.vue'
import APropos from '../pages/APropos.vue'
import Contact from '../pages/Contact.vue'
import Fonctionnement from '../pages/Fonctionnement.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/theme/:id', component: ThemeDetail },
  { path: '/panier', component: Panier },
  { path: '/a-propos', component: APropos },
  { path: '/contact', component: Contact },
  { path: '/comment-ca-marche', component: Fonctionnement }
]

export default createRouter({
  history: createWebHistory(),
  routes
})