<template>
  <div>
    <h2>Registrar un nuevo usuario</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Nombre de usuario" required />
      <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Registrarse</button>
      <p v-if="error">{{ error }}</p>
    </form>
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
    ...mapMutations(["setUserId', 'setError"]),
    async handleRegister() {
      try {
        await this.$store.dispatch("register", {
          username: this.username,
          password: this.password,
        });
        this.setUserId(this.username);
        this.$router.push("/portfolio"); // Redirige al portafolio después de registrarse
      } catch {
        this.setError("Error al registrarse. Inténtalo de nuevo.");
      }
    },
  },
};
</script>
