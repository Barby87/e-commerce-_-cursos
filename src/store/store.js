import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: []
  },
  getters: {
    sendingCourses(state) {
      return state.courses;
    }
  },

  mutations: {
    apiDataMutation(state, apiInfoReceived) {
      state.courses = apiInfoReceived;
    },
  },
  actions: {
    apiDataAction(context, apiInfoReceived) {
      context.commit('apiDataMutation', apiInfoReceived);
    },
  }
})
