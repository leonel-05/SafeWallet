<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
    <ul class="nav-links">
      <li><router-link to="/portfolio" class="nav-item">Portafolio</router-link></li>
      <li><router-link to="/transactions" class="nav-item">Transacciones</router-link></li>
      <li><router-link to="/analytics" class="nav-item">Análisis</router-link></li>
      <li><router-link to="/settings" class="nav-item">Configuración</router-link></li>
      <button @click="logout" class="logout-button">Cerrar Sesión</button>
    </ul>
  </nav>
</template>
  
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
};
</script>
  
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 85px;
  margin-right: 1rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.nav-item {
  color: #f4f4f4;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #555;
}

.logout-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #cc0000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
  .nav-item {
    margin-bottom: 0.5rem;
  }
}
</style>
