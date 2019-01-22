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

  if (to.meta.auth === true) {
    if (!token) {
      next({name: 'userLogin'});
    }
    try {
      const verifyResponse = await store.dispatch('verifyToken');
      if (!verifyResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: 'userLogin' });
        return;
      }
      HTTP.defaults.headers.common.Authorization = 'JWT ' + token;
    } catch (error) {
      error.toString(); // to avoid 'unused variable'
      next({ name: 'userLogin' });
      return;
    }
    try {
      const userInfoResponse = await store.dispatch('getUserInfo');
      if (!userInfoResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: 'userLogin' });
        return;
      }
    } catch (error) {
      error.toString();
      next({ name: 'userLogin' });
      return;
    }
  }

  if (to.name === 'home' && token ) {
    try {
      const verifyResponse = await store.dispatch('verifyToken');
      if (!verifyResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: 'home' });
        return;
      }
      HTTP.defaults.headers.common.Authorization = 'JWT ' + token;
    } catch (error) {
      error.toString(); // to avoid 'unused variable'
      next({ name: 'home' });
      return;
    }
    try {
      const userInfoResponse = await store.dispatch('getUserInfo');
      if (!userInfoResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: 'home' });
        return;
      }
    } catch (error) {
      error.toString();
      next({ name: 'home' });
      return;
    }
  }

  if (to.name === 'viewRestaurant' && token ) {
    try {
      const verifyResponse = await store.dispatch('verifyToken');
      if (!verifyResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: from.name });
        return;
      }
      HTTP.defaults.headers.common.Authorization = 'JWT ' + token;
    } catch (error) {
      error.toString(); // to avoid 'unused variable'
      next({ name: from.name });
      return;
    }
    try {
      const userInfoResponse = await store.dispatch('getUserInfo');
      if (!userInfoResponse.success) {
        store.commit(AUTH_DELETE_USER);
        next({ name: from.name });
        return;
      }
    } catch (error) {
      error.toString();
      next({ name: from.name });
      return;
    }
  }

  if (to.name === 'userLogin' && token) {
    next('/');
  }

  next();
});

export default router;
