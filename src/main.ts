import 'lib-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './icons';
import './router/router.interceptor';
import './filters';
import './services';
import './registerServiceWorker';
import './bus';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
