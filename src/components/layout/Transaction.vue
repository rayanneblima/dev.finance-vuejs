<template>
  <section id="transaction">
    <h2 class="sr-only">Transações</h2>

    <a href="#" class="button new" @click="$emit('show-modal')">+ Nova Transação</a>

    <TransactionTable
      :transactions="transactions"
      @remove-transaction="$emit('remove-transaction', $event)"
    />
  </section>
</template>

<script>
import TransactionTable from '../ui/TransactionTable'

export default {
  name: "Transaction",

  components: {
    TransactionTable
  },

  props: {
    transactions: {
      default: () => ([]),
      require: false,
      type: Array
    }
  }
};
</script>

<style>
#transaction {
  display: block;
  overflow-x: auto;
}
</style>
