<template>
  <!-- eslint-disable -->
    <component
      :is="icon"
      :id="id"
      class="icon"
      viewBox="0 0 740 1050">
    </component>
  <!-- eslint-enable -->
</template>

<script>
  export default {
    name : 'Icon',

    components : {
      'Cards-2-Club'     : () => import('~/assets/cards/Cards-2-Club.svg'),
      'Cards-3-Club'     : () => import('~/assets/cards/Cards-3-Club.svg'),
      'Cards-4-Club'     : () => import('~/assets/cards/Cards-4-Club.svg'),
      'Cards-5-Club'     : () => import('~/assets/cards/Cards-5-Club.svg'),
      'Cards-6-Club'     : () => import('~/assets/cards/Cards-6-Club.svg'),
      'Cards-7-Club'     : () => import('~/assets/cards/Cards-7-Club.svg'),
      'Cards-8-Club'     : () => import('~/assets/cards/Cards-8-Club.svg'),
      'Cards-9-Club'     : () => import('~/assets/cards/Cards-9-Club.svg'),
      'Cards-10-Club'    : () => import('~/assets/cards/Cards-10-Club.svg'),
      'Cards-J-Club'     : () => import('~/assets/cards/Cards-J-Club.svg'),
      'Cards-Q-Club'     : () => import('~/assets/cards/Cards-Q-Club.svg'),
      'Cards-K-Club'     : () => import('~/assets/cards/Cards-K-Club.svg'),
      'Cards-A-Club'     : () => import('~/assets/cards/Cards-A-Club.svg'),
      'Cards-2-Diamond'  : () => import('~/assets/cards/Cards-2-Diamond.svg'),
      'Cards-3-Diamond'  : () => import('~/assets/cards/Cards-3-Diamond.svg'),
      'Cards-4-Diamond'  : () => import('~/assets/cards/Cards-4-Diamond.svg'),
      'Cards-5-Diamond'  : () => import('~/assets/cards/Cards-5-Diamond.svg'),
      'Cards-6-Diamond'  : () => import('~/assets/cards/Cards-6-Diamond.svg'),
      'Cards-7-Diamond'  : () => import('~/assets/cards/Cards-7-Diamond.svg'),
      'Cards-8-Diamond'  : () => import('~/assets/cards/Cards-8-Diamond.svg'),
      'Cards-9-Diamond'  : () => import('~/assets/cards/Cards-9-Diamond.svg'),
      'Cards-10-Diamond' : () => import('~/assets/cards/Cards-10-Diamond.svg'),
      'Cards-J-Diamond'  : () => import('~/assets/cards/Cards-J-Diamond.svg'),
      'Cards-Q-Diamond'  : () => import('~/assets/cards/Cards-Q-Diamond.svg'),
      'Cards-K-Diamond'  : () => import('~/assets/cards/Cards-K-Diamond.svg'),
      'Cards-A-Diamond'  : () => import('~/assets/cards/Cards-A-Diamond.svg'),
      'Cards-2-Heart'    : () => import('~/assets/cards/Cards-2-Heart.svg'),
      'Cards-3-Heart'    : () => import('~/assets/cards/Cards-3-Heart.svg'),
      'Cards-4-Heart'    : () => import('~/assets/cards/Cards-4-Heart.svg'),
      'Cards-5-Heart'    : () => import('~/assets/cards/Cards-5-Heart.svg'),
      'Cards-6-Heart'    : () => import('~/assets/cards/Cards-6-Heart.svg'),
      'Cards-7-Heart'    : () => import('~/assets/cards/Cards-7-Heart.svg'),
      'Cards-8-Heart'    : () => import('~/assets/cards/Cards-8-Heart.svg'),
      'Cards-9-Heart'    : () => import('~/assets/cards/Cards-9-Heart.svg'),
      'Cards-10-Heart'   : () => import('~/assets/cards/Cards-10-Heart.svg'),
      'Cards-J-Heart'    : () => import('~/assets/cards/Cards-J-Heart.svg'),
      'Cards-Q-Heart'    : () => import('~/assets/cards/Cards-Q-Heart.svg'),
      'Cards-K-Heart'    : () => import('~/assets/cards/Cards-K-Heart.svg'),
      'Cards-A-Heart'    : () => import('~/assets/cards/Cards-A-Heart.svg'),
      'Cards-2-Spade'    : () => import('~/assets/cards/Cards-2-Spade.svg'),
      'Cards-3-Spade'    : () => import('~/assets/cards/Cards-3-Spade.svg'),
      'Cards-4-Spade'    : () => import('~/assets/cards/Cards-4-Spade.svg'),
      'Cards-5-Spade'    : () => import('~/assets/cards/Cards-5-Spade.svg'),
      'Cards-6-Spade'    : () => import('~/assets/cards/Cards-6-Spade.svg'),
      'Cards-7-Spade'    : () => import('~/assets/cards/Cards-7-Spade.svg'),
      'Cards-8-Spade'    : () => import('~/assets/cards/Cards-8-Spade.svg'),
      'Cards-9-Spade'    : () => import('~/assets/cards/Cards-9-Spade.svg'),
      'Cards-10-Spade'   : () => import('~/assets/cards/Cards-10-Spade.svg'),
      'Cards-J-Spade'    : () => import('~/assets/cards/Cards-J-Spade.svg'),
      'Cards-Q-Spade'    : () => import('~/assets/cards/Cards-Q-Spade.svg'),
      'Cards-K-Spade'    : () => import('~/assets/cards/Cards-K-Spade.svg'),
      'Cards-A-Spade'    : () => import('~/assets/cards/Cards-A-Spade.svg')
    },

    props : {
      icon : {
        type     : String,
        required : true
      },
      id : {
        type     : Number,
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
