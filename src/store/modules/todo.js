import * as types from '../mutation-types';

const state = {
  newTodo: '',
  todos: {
    1: { id: 1, text: '學習 JavaScript', isEdit: false, isComplete: false },
    2: { id: 2, text: '學習 Vue', isEdit: false, isComplete: false },
    3: { id: 3, text: '學習 React', isEdit: false, isComplete: true },
  },
};

const getters = {
  getTodos(state) {
    return (isComplete) => {
      const list = {};
      Object.keys(state.todos).forEach((key) => {
        if (state.todos[key].isComplete === isComplete) {
          list[key] = state.todos[key];
        }
      });
      return list;
    };
  },
};

const actions = {
  addNewTodo({ commit }) {
    commit(types.ADD_NEW_TODO);
  },
  updateTodo({ commit }, todo) {
    commit(types.UPDATE_TODO, todo);
  },
  updateField({ commit }, fieldObj) {
    commit(types.UPDATE_FIELD, fieldObj);
  },
};

const mutations = {
  [types.ADD_NEW_TODO](state) {
    const newId = parseInt(1000 * Math.random(), 10);
    const newTodo = {
      id: newId,
      text: state.newTodo,
      isEdit: false,
      isComplete: false,
    };
    state.todos = {
      ...state.todos,
      [newId]: newTodo,
    };
    state.newTodo = '';
  },
  [types.UPDATE_TODO](state, payload) {
    state.todos[payload.id] = {
      ...payload,
    };
  },
  [types.UPDATE_FIELD](state, payload) {
    state[payload.field] = payload.value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
