import Vue from 'vue';
import Router from 'vue-router';

import HTTP from '@/utils/http';
import store from '@/store/store';

import { routes } from '@/router/routes';
import { AUTH_DELETE_USER } from '@/store/mutationTypes';



Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (from.name === null && from.name !== 'next') {
    if (!token) {
      next({name: '/'});
      return;
    }
    try {
      const verifyResponse = await store.dispatch('verifyToken');
      if (!verifyResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({name: '/'});
        return;
      }
      HTTP.defaults.headers.common.Authorization = 'JWT ' + token;
    } catch (error) {
      error.toString(); // to use variable 'error'
      next({ name: '/' });
      return'';
    }
  }

  if (to.name === 'login' && token) {
    next('/');
  }

  next();
});

export default router;
