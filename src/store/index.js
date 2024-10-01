import { createStore } from "vuex";
import apiClient from "@/services/api";

const store = createStore({
  state: {
    userId: null,
    transacciones: [],
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  action: {
    async fetchTransacciones({ commit, state }) {
      try {
        commit("setLoading", true);
        const response = await apiClient.get(
          `/transaction?q={"user_id":"${state.userId}"}`
        );
        commit("setTransacciones", response.data);
      } catch (error) {
        commit("setError", "Error al obtener transacciones");
      } finally {
        commit("setLoading", false);
      }
    },
  },
});

export default store;
