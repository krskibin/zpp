import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/store';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import EvaIcons from 'vue-eva-icons'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(EvaIcons);

Vue.use(Element, {locale});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h: any) => h(App),
}).$mount('#app');
