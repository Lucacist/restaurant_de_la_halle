import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import Carte from './Carte.vue';
import Contact from './Contact.vue';
import Evenements from './Evenements.vue';

const routes = [    
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carte',
    name: 'Carte',
    component: Carte
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/evenements',
    name: 'Evenements',
    component: Evenements
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Toujours revenir en haut de la page lors d'un changement de route
    return { top: 0 };
  }
});

export default router;
