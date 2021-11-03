import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      score: 0,
      avatarUrl: "",
    },
  },
  mutations: {
    updateUser(state, response) {
      state.user = response;
    },
    order(state, price) {
      state.user.score -= price;
    }
  },
  actions: {
    updateUser({ commit }) {
      axios
        .get("templates/7ZW3y5GAuIge/data")
        .then((response) => {
          commit("updateUser", response.data);
        })
        .catch((err) => console.log(err));
    },
    fetchClothing() {
      return axios.get("templates/-_RLsEGjof6i/data");
    },
    fetchAccessories() {
      return axios.get("templates/q3OPxRyEcPvP/data");
    }
  },

});
