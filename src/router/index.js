import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/views/Todo';
import Fetch from '@/views/Fetch';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/fetch',
      name: 'Fetch',
      component: Fetch,
    },
  ],
});
