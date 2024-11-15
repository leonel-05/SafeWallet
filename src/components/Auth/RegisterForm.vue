<template>
  <div class="register-container">
    <div class="register-left">
      <img :src="require('@/assets/FotoRegister.jpg')" alt="Illustration" class="illustration">
      <h2>Únete y comienza a ahorrar</h2>
      <p>Regístrate y haz crecer tus ahorros.</p>
    </div>
    <div class="register-right">
      <h1>Crear cuenta</h1>
      <form @submit.prevent="handleRegister">
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" v-model="username" required>

        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required>

        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <a @click.prevent="goToLogin" href="#">Inicia sesión</a></p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapMutations(["setUserId", "setError"]),
    async handleRegister() {
      try {
        await this.$store.dispatch("register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.setUserId(this.username);
        this.$router.push("/portfolio");
      } catch {
        this.setError("Error al registrarse. Verifica tus datos e inténtalo de nuevo.");
      }
    },
    goToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  min-height: 100vh;
  background-color: #1b2b3c;
  color: #fff;
}

.register-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #19222d;
}

.illustration {
  max-width: 75%;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  text-align: center;
}

a {
  color: #ff6961;
}

.register-right {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #24344d;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  outline: none;
}

button {
  background-color: #3a77ff;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2c5ecc;
}
</style>
