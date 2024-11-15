<template>
  <div id="app">
    <NavBar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./assets/NavBar.vue";

export default {
  components: {
    NavBar
  },
  setup() {
    const route = useRoute();
    const showNavBar = computed( () => !["/", "/register"].includes(route.path));

    return {
      showNavBar
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
