<template>
  <div v-if="loading" class="loader">Cargando...</div>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
