import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Importe o componente Login
import BemVindo from '../components/BemVindo.vue'; // Importe o componente BemVindo

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login, // Define Login.vue como a página inicial
  },
  {
    path: '/bemvindo',
    name: 'BemVindo',
    component: BemVindo, // Página para onde o usuário será redirecionado após o login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;