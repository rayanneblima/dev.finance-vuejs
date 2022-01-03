<template>
  <tr>
    <td class="description">{{ transaction.description }}</td>
    <td :class="classCSS">{{ formattedAmount }}</td>
    <td class="date">{{ transaction.date }}</td>
    <td>
      <img
        @click="$emit('remove-transaction', transaction)"
        src="../../assets/minus.svg"
        alt="Remover Transação"
      />
    </td>
  </tr>
</template>

<script>
import Utils from '../../utils'

export default {
  name: "TransactionRow",

  props: {
    transaction: {
      default: () => ({}),
      require: true,
      type: Object
    }
  },

  computed: {
    classCSS () {
      return this.transaction.amount < 0 ? 'expense' : 'income'
    },

    formattedAmount () {
      return Utils.formatCurrency(this.transaction.amount)
    }
  }
};
</script>

<style>
tbody tr {
  opacity: 0.7;
}

tbody tr:hover {
  opacity: 1;
}

td {
  background: var(--white);
  padding: 1rem 2rem;
}

td.description {
  color: var(--dark-blue);
}

td.income {
  color: var(--green);
}

td.expense {
  color: var(--red);
}
</style>
