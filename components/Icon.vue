<template>
  <!-- eslint-disable -->
    <component
      :is="icon"
      class="icon"
      viewBox="0 0 740 1050">
    </component>
  <!-- eslint-enable -->
</template>

<script>
  // No more dynamic imports because it is longer to fetch lots of 4ko dynamicaly than 150ko once

  import Cards2Club from '~/assets/cards/Cards-2-Club.svg';
  import Cards3Club from '~/assets/cards/Cards-3-Club.svg';
  import Cards4Club from '~/assets/cards/Cards-4-Club.svg';
  import Cards5Club from '~/assets/cards/Cards-5-Club.svg';
  import Cards6Club from '~/assets/cards/Cards-6-Club.svg';
  import Cards7Club from '~/assets/cards/Cards-7-Club.svg';
  import Cards8Club from '~/assets/cards/Cards-8-Club.svg';
  import Cards9Club from '~/assets/cards/Cards-9-Club.svg';
  import Cards10Club from '~/assets/cards/Cards-10-Club.svg';
  import CardsJClub from '~/assets/cards/Cards-J-Club.svg';
  import CardsQClub from '~/assets/cards/Cards-Q-Club.svg';
  import CardsKClub from '~/assets/cards/Cards-K-Club.svg';
  import CardsAClub from '~/assets/cards/Cards-A-Club.svg';
  import Cards2Diamond from '~/assets/cards/Cards-2-Diamond.svg';
  import Cards3Diamond from '~/assets/cards/Cards-3-Diamond.svg';
  import Cards4Diamond from '~/assets/cards/Cards-4-Diamond.svg';
  import Cards5Diamond from '~/assets/cards/Cards-5-Diamond.svg';
  import Cards6Diamond from '~/assets/cards/Cards-6-Diamond.svg';
  import Cards7Diamond from '~/assets/cards/Cards-7-Diamond.svg';
  import Cards8Diamond from '~/assets/cards/Cards-8-Diamond.svg';
  import Cards9Diamond from '~/assets/cards/Cards-9-Diamond.svg';
  import Cards10Diamond from '~/assets/cards/Cards-10-Diamond.svg';
  import CardsJDiamond from '~/assets/cards/Cards-J-Diamond.svg';
  import CardsQDiamond from '~/assets/cards/Cards-Q-Diamond.svg';
  import CardsKDiamond from '~/assets/cards/Cards-K-Diamond.svg';
  import CardsADiamond from '~/assets/cards/Cards-A-Diamond.svg';
  import Cards2Heart from '~/assets/cards/Cards-2-Heart.svg';
  import Cards3Heart from '~/assets/cards/Cards-3-Heart.svg';
  import Cards4Heart from '~/assets/cards/Cards-4-Heart.svg';
  import Cards5Heart from '~/assets/cards/Cards-5-Heart.svg';
  import Cards6Heart from '~/assets/cards/Cards-6-Heart.svg';
  import Cards7Heart from '~/assets/cards/Cards-7-Heart.svg';
  import Cards8Heart from '~/assets/cards/Cards-8-Heart.svg';
  import Cards9Heart from '~/assets/cards/Cards-9-Heart.svg';
  import Cards10Heart from '~/assets/cards/Cards-10-Heart.svg';
  import CardsJHeart from '~/assets/cards/Cards-J-Heart.svg';
  import CardsQHeart from '~/assets/cards/Cards-Q-Heart.svg';
  import CardsKHeart from '~/assets/cards/Cards-K-Heart.svg';
  import CardsAHeart from '~/assets/cards/Cards-A-Heart.svg';
  import Cards2Spade from '~/assets/cards/Cards-2-Spade.svg';
  import Cards3Spade from '~/assets/cards/Cards-3-Spade.svg';
  import Cards4Spade from '~/assets/cards/Cards-4-Spade.svg';
  import Cards5Spade from '~/assets/cards/Cards-5-Spade.svg';
  import Cards6Spade from '~/assets/cards/Cards-6-Spade.svg';
  import Cards7Spade from '~/assets/cards/Cards-7-Spade.svg';
  import Cards8Spade from '~/assets/cards/Cards-8-Spade.svg';
  import Cards9Spade from '~/assets/cards/Cards-9-Spade.svg';
  import Cards10Spade from '~/assets/cards/Cards-10-Spade.svg';
  import CardsJSpade from '~/assets/cards/Cards-J-Spade.svg';
  import CardsQSpade from '~/assets/cards/Cards-Q-Spade.svg';
  import CardsKSpade from '~/assets/cards/Cards-K-Spade.svg';
  import CardsASpade from '~/assets/cards/Cards-A-Spade.svg';

  export default {
    name : 'Icon',

    components : {
      'Cards-2-Club'     : Cards2Club,
      'Cards-3-Club'     : Cards3Club,
      'Cards-4-Club'     : Cards4Club,
      'Cards-5-Club'     : Cards5Club,
      'Cards-6-Club'     : Cards6Club,
      'Cards-7-Club'     : Cards7Club,
      'Cards-8-Club'     : Cards8Club,
      'Cards-9-Club'     : Cards9Club,
      'Cards-10-Club'    : Cards10Club,
      'Cards-J-Club'     : CardsJClub,
      'Cards-Q-Club'     : CardsQClub,
      'Cards-K-Club'     : CardsKClub,
      'Cards-A-Club'     : CardsAClub,
      'Cards-2-Diamond'  : Cards2Diamond,
      'Cards-3-Diamond'  : Cards3Diamond,
      'Cards-4-Diamond'  : Cards4Diamond,
      'Cards-5-Diamond'  : Cards5Diamond,
      'Cards-6-Diamond'  : Cards6Diamond,
      'Cards-7-Diamond'  : Cards7Diamond,
      'Cards-8-Diamond'  : Cards8Diamond,
      'Cards-9-Diamond'  : Cards9Diamond,
      'Cards-10-Diamond' : Cards10Diamond,
      'Cards-J-Diamond'  : CardsJDiamond,
      'Cards-Q-Diamond'  : CardsQDiamond,
      'Cards-K-Diamond'  : CardsKDiamond,
      'Cards-A-Diamond'  : CardsADiamond,
      'Cards-2-Heart'    : Cards2Heart,
      'Cards-3-Heart'    : Cards3Heart,
      'Cards-4-Heart'    : Cards4Heart,
      'Cards-5-Heart'    : Cards5Heart,
      'Cards-6-Heart'    : Cards6Heart,
      'Cards-7-Heart'    : Cards7Heart,
      'Cards-8-Heart'    : Cards8Heart,
      'Cards-9-Heart'    : Cards9Heart,
      'Cards-10-Heart'   : Cards10Heart,
      'Cards-J-Heart'    : CardsJHeart,
      'Cards-Q-Heart'    : CardsQHeart,
      'Cards-K-Heart'    : CardsKHeart,
      'Cards-A-Heart'    : CardsAHeart,
      'Cards-2-Spade'    : Cards2Spade,
      'Cards-3-Spade'    : Cards3Spade,
      'Cards-4-Spade'    : Cards4Spade,
      'Cards-5-Spade'    : Cards5Spade,
      'Cards-6-Spade'    : Cards6Spade,
      'Cards-7-Spade'    : Cards7Spade,
      'Cards-8-Spade'    : Cards8Spade,
      'Cards-9-Spade'    : Cards9Spade,
      'Cards-10-Spade'   : Cards10Spade,
      'Cards-J-Spade'    : CardsJSpade,
      'Cards-Q-Spade'    : CardsQSpade,
      'Cards-K-Spade'    : CardsKSpade,
      'Cards-A-Spade'    : CardsASpade
    },

    props : {
      icon : {
        type     : String,
        required : true
      }
    }
  };
</script>

<style scoped>
.icon {
  width  : 75px;
  height : 100px;
}
</style>
