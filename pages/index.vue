<template>
  <div
    class="app"
    :class="answer === null || `app--${answer ? 'correct' : 'error'}`">
    <button
      class="app__button app__button--help"
      @click="showHelp = !showHelp">
      ?
    </button>

    <Help
      v-show="showHelp"
      :tables="tables" />

    <div class="app__playmat">
      <p class="app__label">
        Carte du Croupier
      </p>

      <Icon
        class="app__card app__card--dealer"
        :icon="dealerSvgCard" />

      <p
        class="app__correction"
        :class="hideCorrection || 'app__correction--show'">
        <span v-if="this.answer">
          ✅ Correct
        </span>
        <span v-else>
          ❌ Bonne réponse : <b>{{ dealerCard.action }}</b>
        </span>
      </p>

      <div class="app__cards">
        <Icon
          v-for="(card, index) in playerSvgCards"
          :key="index"
          class="app__card app__card--player"
          :icon="card" />
      </div>

      <p class="app__label">
        Vos cartes
      </p>
    </div>

    <div class="app__actions">
      <button
        v-for="(action, index) in Object.keys(actions)"
        :key="index"
        type="button"
        :class="`app__button--${action.toLowerCase()}`"
        class="app__button"
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
  import { colors } from '~/constants/Colors.js';
  import { faces } from '~/constants/Faces.js';
  import { actions } from '~/constants/Actions.fr.js';
  import { totCards } from '~/constants/TotCards.js';

  import Icon from '~/components/Icon';
  import Help from '~/components/Help';

  export default {
    components : {
      Icon,
      Help
    },

    data() {
      return {
        tot,
        pairs,
        aces,
        tables         : [],
        actions,
        cards          : 0,
        playerCards    : [],
        dealerCard     : {},
        answer         : null,
        hideCorrection : true,
        showHelp       : false
      };
    },

    computed : {
      dealerSvgCard() {
        const val = this.dealerCard.value.toString().replace('11', 'A').replace('10', this.pickFace());

        return `Cards-${val}-${this.pickColor()}`;
      },

      playerSvgCards() {
        return this.playerCards.map((card) => {
          const val = card.toString().replace('11', 'A').replace('10', this.pickFace());

          return `Cards-${val}-${this.pickColor()}`;
        });
      }
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

        this.cards = this.pick(table[cardGroup].values);

        this.generateCards(this.cards, n);

        this.dealerCard = this.pick(table[cardGroup].dealer);

        this.hideCorrection = true;
        this.answer       = null;
      },

      verify(action) {
        this.answer       = actions[action] === this.dealerCard.action;
        this.hideCorrection = false;
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
      },

      pickColor() {
        return colors[this.getRandomInt(colors.length)];
      },

      pickFace() {
        return faces[this.getRandomInt(faces.length)];
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
  min-height      : 80vh;
  margin          : auto;
  text-align      : center;
  border          : $border-width transparent solid;

  &--error {
    border : $border-width solid $error;
  }

  &--correct {
    border : $border-width solid $correct;
  }

  &__title {
    margin    : 0 20px;
    font-size : 1.8rem;
  }

  &__label {
    margin : 0;
  }

  &__playmat {
    display        : flex;
    flex-direction : column;
    align-items    : center;
  }

  &__cards {
    display         : flex;
    justify-content : space-evenly;
  }

  &__card {
    width            : 75px;
    height           : 100px;
    margin           : 5px;
    background-color : #eee;
    border           : 1px solid #aaa;
    border-radius    : 5px;
  }

  &__correction {
    color : transparent;

    &--show {
      color : black;
    }
  }

  &__actions {
    margin-top : 20px;
  }

  &__button {
    width         : 75px;
    height        : 75px;
    margin        : 5px;
    padding       : 0;
    font-size     : 1rem;
    text-align    : center;
    border        : 0;
    border-radius : 50%;
    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .2), inset -2px -2px 2px rgba(0, 0, 0, .2);
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

    &--help {
      align-self       : flex-end;
      margin-bottom    : 20px;
      color            : grey;
      font-size        : 2rem;
      background-color : white;
      border           : 3px solid grey;
    }

    &:hover,
    &:focus {
      cursor : pointer;
    }
  }
}
</style>
