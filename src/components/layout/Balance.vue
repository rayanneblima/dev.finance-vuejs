<template>
  <section id="balance">
    <h2 class="sr-only">Balanço</h2>

    <BalanceCard title="Entradas" icon="income" :amount="incomes" />
    <BalanceCard title="Saídas" icon="expense" :amount="expenses" />
    <BalanceCard title="Total" icon="total" :addClass="['total', `${ total > 0 && 'positive' || total < 0 && 'negative' || ''}`]" :amount="total" />
  </section>
</template>

<script>
import BalanceCard from '../ui/BalanceCard'

export default {
  name: "Balance",

  components: {
    BalanceCard
  },

  props: {
    transactions: {
      default: () => ([]),
      require: true,
      type: Array
    }
  },

  computed: {
    incomes () {
      let income = 0;
      this.transactions.forEach((transaction) => transaction.amount > 0 ? income += Number(transaction.amount) : income);
      return income;
    },

    expenses () {
      let expense = 0;
      this.transactions.forEach((transaction) => transaction.amount < 0 ? expense += Number(transaction.amount) : expense);
      return expense;
    },

    total () {
      return this.incomes + this.expenses;
    }
  }
};
</script>

<style>
#balance {
  margin-top: -7rem;
}

#balance h2 {
  color: var(--white);
  margin-top: 0;
}

@media (min-width: 860px) {
  #balance {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>
