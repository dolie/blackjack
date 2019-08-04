<template>
  <div
    class="app"
    :class="answer === null || `app--${answer ? 'correct' : 'error'}`">
    <h1 class="app__title">
      Blackjack Basic Strategy learning app
    </h1>

    <p>
      Carte du Croupier
      <br>
      {{ dealerCard.value }}
    </p>

    <p>
      <span
        v-for="(card, index) in playerCards"
        :key="index">
        {{ card }}
      </span>
      <br>
      Vos cartes
    </p>


    <p
      class="app__response"
      :class="hideResponse || 'app__response--show'">
      Action à prendre : {{ dealerCard.action }}
    </p>

    <div class="app__actions">
      <button
        v-for="(action, index) in Object.keys(actions)"
        :key="index"
        type="button"
        :class="`app__action--${action.toLowerCase()}`"
        class="app__action"
        @mousedown="verify(action)"
        @touchstart="verify(action)"
        @click="draw">
        {{ actions[action] }}
      </button>
    </div>
  </div>
</template>

<script>
  import { tot, pairs, aces } from '~/constants/DecisionTables.fr.js';
  import { actions } from '~/constants/Actions.fr.js';
  import { totCards } from '~/constants/TotCards.js';

  export default {
    data() {
      return {
        tot,
        pairs,
        aces,
        tables       : [],
        actions,
        cards        : 0,
        playerCards  : [],
        dealerCard   : 2,
        answer       : null,
        hideResponse : true
      };
    },

    created() {
      this.tables = [tot, pairs, aces];
      this.draw();
    },

    methods : {
      draw() {
        const n         = this.getRandomInt(this.tables.length);
        const table     = this.tables[n];
        const cardGroup = this.getRandomInt(table.length);

        this.cards       = this.pick(table[cardGroup].values);

        this.generateCards(this.cards, n);

        this.dealerCard  = this.pick(table[cardGroup].dealer);

        this.hideResponse = true;
        this.answer       = null;
      },

      verify(action) {
        this.answer       = actions[action] === this.dealerCard.action;
        this.hideResponse = this.answer;
      },

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      },

      /**
       * Pick a value or an object in an array
       *
       * @param {array} array of number or objects
       * @return {number}
       */
      pick(array) {
        const n = this.getRandomInt(array.length);

        return array[n];
      },

      generateCards(cards, table) {
        this.playerCards = [];

        switch (table) {
          case 0:
            this.generateCardsTot(cards);
            break;
          case 1:
            this.generateCardsPairs(cards);
            break;
          case 2:
            this.generateCardsAces(cards);
            break;
          default:
            break;
        }

        if (Math.random() >= .5) {
          this.playerCards.reverse();
        }
      },

      generateCardsTot(cards) {
        const nbPossibilities = totCards[cards].length;
        const possibilities   = totCards[cards];

        const n = this.getRandomInt(nbPossibilities);

        this.playerCards = possibilities[n];
      },

      generateCardsPairs(cards) {
        this.playerCards.push(cards);
        this.playerCards.push(cards);
      },

      generateCardsAces(cards) {
        this.playerCards.push(11);
        this.playerCards.push(cards);
      }
    }
  };
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.app {
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  width           : 100%;
  max-width       : 600px;
  height          : 100vh;
  margin          : auto;
  text-align      : center;
  border          : 3px transparent solid;

  &--error {
    border : 10px solid $error;
  }

  &--correct {
    border : 10px solid $correct;
  }

  &__title {
    margin    : 0 20px;
    font-size : 1.8rem;
  }

  &__response {
    color : transparent;

    &--show {
      color : black;
    }
  }

  &__action {
    width         : 100px;
    height        : 100px;
    margin        : 15px;
    padding       : 10px;
    font-size     : 1.2rem;
    border        : 0;
    border-radius : 50%;
    user-select   : none;

    &--split {
      background-color : $split;
    }

    &--hit {
      background-color : $hit;
    }

    &--double {
      background-color : $double;
    }

    &--stay {
      background-color : $stay;
    }
  }
}
</style>
