<template>
  <div>
    <h1>Blackjack Basic Strategy learning app</h1>

    <p>{{cards}}</p>

    <button @click="draw">Redraw</button>
  </div>
</template>

<script>
import {tot, pairs, aces} from '~/constants/DecisionTables.fr.js';

export default {
  data(){
    return {
      tot : {},
      pairs : {},
      aces : {},
      cards : 3
    }
  },

  created() {
    this.tot = tot;
    this.pairs = pairs;
    this.aces = aces;

    this.draw();
  },

  methods : {
    draw() {
      const cardGroup = this.getRandomInt(this.tot.length);

      this.cards = this.pick(this.tot[cardGroup].values);
    },

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },

    pick(values) {
      const n = this.getRandomInt(values.length);

      return values[n];
    }
  }
}
</script>