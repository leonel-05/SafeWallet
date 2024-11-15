<template>
  <div class="login-container">
    <div class="login-left">
      <img :src="require('@/assets/FotoLogin.jpg')" alt="Illustration" class="illustration">
      <h2>Poné a rendir tus criptomonedas</h2>
      <p>Generá rendimientos a un solo click y aumentá tus ahorros todos los días.</p>
    </div>
    <div class="login-right">
      <h1>Iniciá sesión</h1>
      <form @submit.prevent="handleLogin">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required>

        <button type="submit">Iniciar sesión</button>
      </form>
      <a href="#">¿Olvidaste tu contraseña?</a>
      <p>¿No tenés una cuenta? <a @click.prevent="goToRegister" href="#">Registrarme</a></p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
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
          username: this.email,
          password: this.password,
        });
        this.setUserId(this.email); 
        this.$router.push("/portfolio");
      } catch {
        this.setError(
          "Error al iniciar sesión. Verifica tus credenciales o regístrate."
        );
      }
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login-container {
    display: flex;
    min-height: 100vh;
    background-color: #1b2b3c; /* Color de fondo */
    color: #fff;
  }
  
  .login-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #19222d; /* Ajustar el color de fondo para un mejor contraste */
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
    color: red;
  }
  
  .login-right {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #24344d; /* Fondo de la sección del formulario */
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