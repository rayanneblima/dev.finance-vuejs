<template>
  <main>
    <div class="container">
      <Balance :transactions="transactions" />
      <Transaction
        :transactions="transactions"
        @show-modal="showModal = true"
        @remove-transaction="removeTransaction($event)"
      />
    </div>

    <Modal
      :showModal="showModal"
      @close-modal="showModal = false"
      @add-transaction="addTransaction($event)"
    />
  </main>
</template>

<script>
import Balance from './Balance'
import Transaction from './Transaction'
import Modal from './Modal';

export default {
  name: 'Main',

  components: {
    Balance,
    Transaction,
    Modal
  },

  data () {
    return {
      showModal: false,
      transactions: []
    }
  },

  created () {
    this.getAllTransacions();
  },

  methods: {
    getAllTransacions () {
      this.transactions = JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
    },

    addTransaction (transaction) {
      this.transactions.unshift(transaction);
      this.showModal = false;
      localStorage.setItem("dev.finances:transactions", JSON.stringify(this.transactions));
    },

    removeTransaction (transaction) {
      this.transactions = this.transactions.filter((item) => (item !== transaction));
      localStorage.setItem("dev.finances:transactions", JSON.stringify(this.transactions));
    }
  }
}
</script>

<style>
  @import url('../../styles/container.css');
</style>
