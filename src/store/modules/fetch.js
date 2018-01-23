import axios from 'axios';
import * as types from '../mutation-types';

const state = {
  data: {},
};

const getters = {};

const actions = {
  async fetchAPI({ commit }) {
    const res = await axios.get('https://api.github.com/');
    commit(types.FETCH_API, res.data);
  },
};

const mutations = {
  [types.FETCH_API](state, payload) {
    state.data = {
      ...payload,
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
