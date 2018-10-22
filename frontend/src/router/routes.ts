import Home from '../views/Home/Home.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/newRestaurant',
        name: 'newRestaurant',
        component: () => import('../views/NewRestaurant/NewRestaurant.vue'),
    },
    {
        path: '/newOpinion',
        name: '/newOpinion',
        component: () => import('../views/NewOpinion/NewOpinion.vue'),
    }
];
