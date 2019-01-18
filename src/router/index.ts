/**
 *
 * @authors liwb (lwbhtml@gmail.com)
 * @date    2019/01/12
 * @description 定义路由模块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const loadView = (view: string) => () => import(`@views/${view}/index.vue`);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: loadView('hello')
  },
  {
    path: '/home',
    name: 'home',
    component: loadView('home')
  },
  {
    path: '*', redirect: '/'
  }
];

export default new Router({
    mode: 'hash',
    routes
});
