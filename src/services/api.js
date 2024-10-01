import axios from "axios";
import store from "@/store"; //importamos store para el estado glonal
import router from "@/router"; //importamos router para redigirigir a Login

//Crea una instancia de axios configurada
const apiClient = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest/",
  headers: {
    "x-apikey": "60eb09146661365596af552f",
  },
  timeout: 10000,
});
//Interceptor de solicitud para agregar logica antes de cada request
apiClient.interceptors.request.use(
  (config) => {
    const userId = store.getters.getUserId; //obtenemos el UserId desde vuex

    if (userId) {
      config.headers.common["Authorization"] = `Bearer ${userId}`;
    } else {
      console.log("Ususario no autenticado. ");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//interceptor de repuesta para manejar errores globales
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Usuario no autorizado. Redirigiendo al Login... "); //si el estado es 401 lo enviamos otra vez al login
      store.commit("logout"); //Limpiamos el estado del usuario
      router.push("/"); //Redirigimos a Login
    } else if (error.code === "ECONNABORTED") {
      console.error("Error de timeout, intenta nuevamente. ");
    } else {
      console.error("Error en la solicitud: ", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
