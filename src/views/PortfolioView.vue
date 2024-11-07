<template>
  <div>
    <h1>Mi Portafolio</h1>
    <AddTransactionForm />
    <TransactionList />
  </div>
</template>

<script>
import AddTransactionForm from "../components/Portfolio/AddTransactionForm.vue";
import TransactionList from "../components/Portfolio/TransactionList.vue";

export default {
  components: {
    AddTransactionForm,
    TransactionList,
  },
};
</script>
