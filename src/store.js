import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


/* eslint-disable import/prefer-default-export */
export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    count: 0,
    history: [],
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
      state.count += 1;
    },
    /* eslint-enable no-param-reassign */
  },
  actions: {},
  getters: {
    getMenuStatus: state => state.menuIsOpen,
  },
});
