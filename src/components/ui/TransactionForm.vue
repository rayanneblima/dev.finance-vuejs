<template>
  <div id="form">
    <h2>Nova Transação</h2>

    <form @submit.prevent="submit">
      <div class="input-group">
        <label class="sr-only" for="description">Descrição</label>
        <input
          id="description"
          v-model="transaction.description"
          name="description"
          type="text"
          placeholder="Descrição"
        />
      </div>

      <div class="input-group">
        <label class="sr-only" for="amount">Valor</label>
        <input
          id="amount"
          v-model="transaction.amount"
          name="amount"
          type="number"
          step="0.01"
          placeholder="0,00"
        />
        <small class="help"
          >Use o sinal <b>"-" (negativo)</b> para despesas e <b>"," (vírgula)</b> para casas
          decimais.</small
        >
      </div>

      <div class="input-group">
        <label class="sr-only" for="date">Data</label>
        <input id="date" v-model="transaction.date" name="date" type="date" />
      </div>

      <div class="input-group actions">
        <a href="#" class="button cancel" @click="$emit('close-modal')"
          >Cancelar</a
        >
        <button type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
import Utils from '../../utils';

export default {
  name: "TransacionForm",

  data () {
    return {
      transaction: {
        description: '',
        amount: '',
        date: ''
      }
    }
  },

  methods: {
    formatValues () {
      let { description, amount, date } = this.transaction;

      amount = Utils.formatAmount(amount);
      date = Utils.formatDate(date);

      return {
        description,
        amount,
        date,
      };
    },

    validateFields () {
      const { description, amount, date } = this.transaction;

      if (
        description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === ""
      ) {
        throw new Error("Por favor, preencha todos os campos.");
      }
    },

    submit () {
      try {
        this.validateFields();
        const transaction = this.formatValues();
        this.$emit('add-transaction', transaction);
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style>
#form {
  max-width: 500px;
}

#form h2 {
  margin-top: 0;
}

#form form input {
  border: none;
  border-radius: 0.2rem;
  padding: 0.8rem;
  width: 100%;
}

.input-group {
  margin-top: 0.8rem;
}

.input-group small {
  opacity: 0.4;
}

.input-group.actions {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.input-group.actions a,
.input-group.actions button {
  width: 48%;
}
</style>
