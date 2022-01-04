<template>
  <table id="data-table">
    <thead>
      <tr>
        <th>Descrição</th>
        <th>Valor</th>
        <th>Data</th>
        <th></th>
      </tr>
    </thead>

    <tbody v-if="transactions.length">
      <template v-for="(transaction, index) in transactions">
        <TransactionRow
          :transaction="transaction"
          :key="index"
          @remove-transaction="$emit('remove-transaction', $event)"
        />
      </template>
    </tbody>
  </table>
</template>

<script>
import TransactionRow from './TransactionRow'

export default {
  name: "TransactionTable",

  components: {
    TransactionRow
  },

  props: {
    transactions: {
      default: () => ([]),
      required: true,
      type: Array
    }
  }
};
</script>

<style>
#data-table {
  border-spacing: 0 0.5rem;
  color: var(--grey);
  width: 100%;
}

#data-table thead tr:first-child,
#data-table tbody td:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}

#data-table thead tr:last-child,
#data-table tbody td:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}

#data-table tbody td:last-child img {
  cursor: pointer;
}

#data-table th {
  background: var(--white);
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: left;
}
</style>
