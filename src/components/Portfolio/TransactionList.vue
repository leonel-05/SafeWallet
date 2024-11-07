<template>
  <div>
    <h2>Lista de Transacciones</h2>
    <Loader v-if="loading" />
    <ul v-if="!loading">
      <li v-for="transaction in Transacciones" :key="transaction._id">
        {{ transaction.datetime }} - {{ transaction.crypto_code }}:
        {{ transaction.crypto_amount }} ({{ transaction.action }})
        <button @click="deleteTransaction(transaction._id)">Eliminar</button>
      </li>
    </ul>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Loader from "../Shared/LoadingIndicator.vue";

export default {
  components: { Loader },
  computed: {
    ...mapGetters(["getTransacciones"]),
    ...mapState(["loading", "error"]),
  },
  methods: {
    ...mapActions(["fetchTransacciones", "deleteTransaction"]),
  },
  created() {
    this.fetchTransacciones();
  },
};
</script>
