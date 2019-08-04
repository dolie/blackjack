<template>
  <div
    :class="answer === null || `app--${answer ? 'correct' : 'error'}`"
    class="app">
    <h1>Blackjack Basic Strategy learning app</h1>

    <p>
      Carte du Croupier : {{ dealerCard.value }}
    </p>

    <p>
      Vos cartes : {{ playerCards }}
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
        class="app__action"
        :class="`app__action--${action.toLowerCase()}`"
        @mousedown="verify(action)"
        @click="draw">
        {{ actions[action] }}
      </button>
    </div>
  </div>
</template>

<script>
  import { tot, pairs, aces } from '~/constants/DecisionTables.fr.js';
  import { actions } from '~/constants/actions.fr.js';

  export default {
    data() {
      return {
        tot,
        pairs,
        aces,
        actions,
        playerCards  : 3,
        dealerCard   : 2,
        answer       : null,
        hideResponse : true
      };
    },

    created() {
      this.draw();
    },

    methods : {
      draw() {
        const cardGroup = this.getRandomInt(this.tot.length);

        this.playerCards  = this.pick(this.tot[cardGroup].values);
        this.dealerCard   = this.pick(this.tot[cardGroup].dealer);
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
      }
    }
  };
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.app {
  width           : 100%;
  max-width       : 600px;
  height          : 100vh;
  margin          : auto;
  display         : flex;
  flex-direction  : column;
  justify-content : center;

  text-align : center;
  border     : 3px transparent solid;

  &--error {
    border : 10px solid $error;
  }

  &--correct {
    border : 10px solid $correct;
  }

  &__response {
    color : transparent;

    &--show {
      color : black;
    }
  }

  &__action {
    border : 0;
    width : 100px;
    height: 100px;
    padding : 10px;
    border-radius : 50%;
    margin : 15px;

    &--split {
      background-color : $split
    }

    &--hit {
      background-color : $hit
    }

    &--double {
      background-color : $double
    }

    &--stay {
      background-color : $stay
    }
  }
}
</style>
