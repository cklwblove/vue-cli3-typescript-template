import 'lib-flexible';
import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import router from './router';
import './icons';
import './router/router.interceptor';
import './filters';
import './services';
import './registerServiceWorker';

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
});

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
