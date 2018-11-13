import Home from '../views/Home/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/new-restaurant',
    name: 'newRestaurant',
    component: () => import('../views/NewRestaurant/NewRestaurant.vue'),
  },
  {
    path: '/new-opinion',
    name: 'newOpinion',
    component: () => import('../views/NewOpinion/NewOpinion.vue'),
  },
  {
    path: '/profile',
    name: 'userProfile',
    component: () => import('../views/Profile/UserProfile.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/Other/NotFound.vue'),
  },
];
