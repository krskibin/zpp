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
    meta: {
      auth: true,
    },
  },
  {
    path: '/new-opinion',
    name: 'newOpinion',
    component: () => import('../views/NewOpinion/NewOpinion.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/profile',
    name: 'userProfile',
    component: () => import('../views/Profile/UserProfile.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/register',
    name: 'userRegister',
    component: () => import('../views/Profile/UserRegister.vue'),
  },
  {
    path: '/login',
    name: 'userLogin',
    component: () => import('../views/Profile/UserLogin.vue'),
  },
  {
    path: '/restaurant/:id',
    name: 'viewRestaurant',
    component: () => import('../views/RestaurantView/RestaurantView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/Other/NotFound.vue'),
  },
];
