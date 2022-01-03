<template>
  <div :class="`card ${addClass.length && addClass.toString().replace(',',' ')}`">
    <h3>
      <span>{{ title }}</span>
      <img :src="require(`../../assets/${icon}.svg`)" :alt="`Ícone de ${title}`" />
    </h3>
    <p :id="`${icon}Display`">{{ formattedCurrency }}</p>
  </div>
</template>

<script>
import Utils from '../../utils'

export default {
  name: 'BalanceCard',

  props: {
    title: {
      default: '',
      require: true,
      type: String
    },

    icon: {
      default: '',
      require: true,
      type: String
    },

    addClass: {
      default: () => ([]),
      require: false,
      type: Array
    },

    amount: {
      default: 0,
      require: true,
      type: Number
    }
  },

  computed: {
    formattedCurrency () {
      return Utils.formatCurrency(this.amount)
    }
  }
}
</script>

<style>
.card {
  color: var(--dark-blue);
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
  transition: all 1s;

  /* GlassMorphism Effect */
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 6.0px );
  border-radius: 0.25rem;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 12.0px );
}

.card:hover {
  transform: translate(-20px, -40px) scale(1.2);
  z-index: 10;
}

.card h3 {
  align-items: center;
  color: var(--white);
  display: flex;
  font-weight: normal;
  font-size: 1rem;
  justify-content: space-between;
}

.card p {
  font-size: 2rem;
  line-height: 3rem;
  margin-top: 1rem;
}

#expense {
  color: var(--dark-blue);
}

.card.total {
  color: var(--white);
  background: rgba(54, 63, 95, 0.4);
}

.card.total.positive {
  background: rgba(81, 189, 79, 0.7);
}

.card.total.negative {
  background: rgba(189, 79, 105, 0.7);
}

@media (min-width: 860px) {
  #expense {
    color: var(--white);
  }
}
</style>
