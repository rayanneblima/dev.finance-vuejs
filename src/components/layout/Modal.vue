<template>
  <div class="modal-overlay" v-if="showModal" ref="modal" @keydown.esc="$emit('close-modal')" tabindex="0">
    <div class="modal">
      <TransactionForm
        @close-modal="$emit('close-modal')"
        @add-transaction="$emit('add-transaction', $event)"
      />
    </div>
  </div>
</template>

<script>
import TransactionForm from '../ui/TransactionForm'

export default {
  name: "Modal",

  components: {
    TransactionForm
  },

  props: {
    showModal: {
      default: false,
      required: false,
      type: Boolean
    },
  },

  watch: {
    showModal () {
      this.showModal && this.$nextTick(() => this.$refs.modal.focus());
    }
  }
};
</script>

<style>
.modal-overlay {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.modal {
  background: var(--light-gray);
  border-radius: 4px;
  padding: 2.4rem;
  position: relative;
  z-index: 0;
}
</style>
