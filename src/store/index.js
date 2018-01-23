import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import fetch from './modules/fetch';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    todo,
    fetch,
  },
  strict: debug,
});
