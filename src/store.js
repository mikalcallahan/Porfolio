import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navIsOpen: false,
    history: [],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getNavStatus: state => {  return state.navIsOpen; }
  },
});
