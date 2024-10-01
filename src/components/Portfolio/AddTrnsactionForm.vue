<template>
  <form @submit.prevent="submitForm">
    <select v-model="Form.action" required>
      <option value="purchase">Compra</option>
      <option value="sale">Venta</option>
    </select>
    <input v-model="form.crypto_code" placeholder="Criptomoneda" required />
    <input
      v-model="form.crypto_amount"
      type="number"
      min="0"
      step="any"
      required
    />
    <input v-model="form.money" type="number" min="0" required />
    <button type="submit" :disabled="!$v.$invalid">Guardar</button>
    <p v-if="$v.form.meney.$error">
      El monto es requerido y debe ser mayor a 0.
    </p>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";

export default {
  data() {
    return {
      form: {
        action: "purchase",
        crypto_code: "",
        crypto_amount: 0,
        money: 0,
      },
    };
  },
  validations() {
    return {
      form: {
        crypto_code: { required },
        crypto_amount: { required, minValue: minValue(0.001) },
        money: { required, minValue: minValue(1) },
      },
    };
  },
  setup() {
    return { $v: useVuelidate() };
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        this.$emit("addTransaction", this.form);
      }
    },
  },
};
</script>
