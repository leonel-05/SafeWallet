import { createStore } from "vuex";
import apiClient from "../services/api";

const store = createStore({
  state: {
    userId: null,
    transacciones: [],
    loading: false,
    error: null,
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    },
    setTransacciones(state, transacciones) {
      state.transacciones = transacciones;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
    logout(state) {
      state.userId = null;
      state.transacciones = [];
      localStorage.removeItem("userId");
    },
  },
  action: {
    async login({ commit }, { username, password }) {
      commit("setLoading", true);
      try {
        //Post para autenticar el usuario
        const response = await apiClient.post("/login", { username, password });
        commit("setUserId", response.data.userId);
        localStorage.setItem("userId", response.data.userId);
      } catch (error) {
        commit("setError", "Error de autenticación");
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
    async register({ commit }, { username, password }) {
      commit("setLoading", true);
      try {
        //Post para registrar el usuario
        const response = await apiClient.post("/register", {
          username,
          password,
        });
        commit("setUserId", response.data.userId);
        localStorage.setItem("userId", response.data.userId);
      } catch (error) {
        commit("setError", "Error al registrar");
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
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
  getters: {
    getUserId: (state) => state.userId,
    getTransacciones: (state) => state.transacciones,
    isAuthenticated: (state) => !!state.userId,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
});

export default store;
