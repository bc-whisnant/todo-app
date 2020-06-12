import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push(payload);
    },
    REMOVE_TODO(state, payload) {
      state.todos.shift(payload);
    },
  },
  actions: {
    addTodo(context, payload) {
      context.commit("ADD_TODO", payload);
    },
    removeTodo(context, payload) {
      context.commit("REMOVE_TODO", payload);
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  modules: {},
});
