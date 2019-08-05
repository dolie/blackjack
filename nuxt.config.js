const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router : {
    base : '/blackjack/'
  }
} : {};

export default {
  ...routerBase,
  head : {
    titleTemplate : '♠️♣️♥️♦️ Blackjack Basic Strategy',
    meta          : [
      { charset : 'utf-8' },
      { name : 'viewport', content : 'width=device-width, initial-scale=1' },
      { hid : 'description', name : 'description', content : 'Meta description' }
    ]
  },
  css : [
    '~/assets/css/main.scss'
  ],
  server : {
    port : 8000, // default: 3000
    host : '0.0.0.0' // default: localhost
  },
  modules : [
    '@nuxtjs/svg-sprite'
  ],
  svgSprite : {
    input : '~/assets/cards/'
  }
};
