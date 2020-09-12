import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    favoritesArr: []
  },
  getters: {
    sendingCourses(state) {
      return state.courses;
    },

    sendingFavorites(state) {
      return state.favoritesArr;
    }
  },

  mutations: {
    apiDataMutation(state, apiInfoReceived) {
      state.courses = apiInfoReceived;
    },

    saveFavMutation(state, favReceived) {
      state.favoritesArr.push(favReceived);
    },

    deleteFavMutation(state, index) {
      state.favoritesArr.splice(index, 1);
    }
  },

  actions: {
    apiDataAction(context, apiInfoReceived) {
      context.commit('apiDataMutation', apiInfoReceived);
    },

    saveFavAction(context, favReceived) {
      context.commit('saveFavMutation', favReceived);
    },

    deleteFavAction(context, index) {
      context.commit('deleteFavMutation', index);
    }
  }
})
