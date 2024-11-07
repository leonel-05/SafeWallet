<template>
  <div>
    <h2>Añadir Transacción</h2>
    <form @submit.prevent="submitTransaction">
      <select v-model="transaction.action" required>
        <option value="purchase">Compra</option>
        <option value="sale">Venta</option>
      </select>
      <input
        v-model="transaction.crypto_code"
        placeholder="Criptomoneda"
        required
      />
      <input
        v-model="transaction.crypto_amount"
        type="number"
        min="0"
        step="any"
        placeholder="Cantidad"
        required
      />
      <input
        v-model="transaction.money"
        type="number"
        min="0"
        placeholder="Monto en ARS"
        required
      />
      <button type="submit">Guardar</button>
    </form>
    <Loader v-if="loading" />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "../Shared/LoadingIndicator.vue";

export default {
  components: { Loader },
  data() {
    return {
      transaction: {
        action: "purchase",
        crypto_code: "",
        crypto_amount: 0,
        money: 0,
      },
    };
  },
  computed: {
    ...mapState(["loading", "error"]),
  },
  methods: {
    ...mapActions(["addTransaction"]),
    submitTransaction() {
      this.addTransaction(this.transaction);
    },
  },
};
</script>
