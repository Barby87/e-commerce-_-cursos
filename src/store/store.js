import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    favoritesArr: [],
    buyArr: []
  },
  getters: {
    sendingCourses(state) {
      return state.courses;
    },

    sendingFavorites(state) {
      return state.favoritesArr;
    },

    sendingBuy(state) {
      return state.buyArr;
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
    },

    saveBuyMutation(state, buyReceived) {
      state.buyArr.push(buyReceived);
    },

    deleteProductMutation(state, index) {
      state.buyArr.splice(index, 1)
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
    },

    saveBuyAction(context, buyReceived) {
      context.commit('saveBuyMutation', buyReceived);
    },

    deleteProductAction(context, index) {
      context.commit('deleteProductMutation', index);
    }
  }
})
