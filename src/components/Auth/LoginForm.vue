<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Nombre de usuario" required />
      <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Ingresar</button>
    </form>
    <button @click="goToRegister">Registrarse</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapMutations(["setUserId", "setError"]),
    async handleLogin() {
      try {
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });
        this.setUserId(this.username); // O el userId devuelto desde la respuesta del login
        this.$router.push("/portfolio"); // Redirige al portafolio
      } catch {
        this.setError(
          "Error al iniciar sesión. Verifica tus credenciales o regístrate."
        );
      }
    },
    goToRegister() {
      this.$router.push("/register"); // Redirige a la vista de registro
    },
  },
};
</script>
